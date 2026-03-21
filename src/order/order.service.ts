import { ConflictException, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderRepository } from './order.repository';
import { Order, OrderState } from './entities/order.entity';
import { SpecProductService } from 'src/products/spec-product/spec-product.service';
import { Promotion } from 'generated/prisma';
import { Variant } from 'src/products/entities/product.entity';

@Injectable()
export class OrderService {
  constructor(private orderRepository: OrderRepository, private variantService: SpecProductService) { }
  stateParser = [OrderState.canceled, OrderState.completed, OrderState.pending]
  async create(createOrderDto: CreateOrderDto) {
    let count: { [key: string]: number } = {}
    let prods = await this.variantService.findManyById(createOrderDto.productsID.map(x => x.productId));
    for (const x of createOrderDto.productsID) {
      count[x.productId] = x.count;

      const res = await this.variantService.update(x.productId, {
        setStock: -x.count
      });

      if (res.count === 0) {
        const prod = await this.variantService.findById(x.productId) as Variant;
        throw new ConflictException(
          `El producto ${prod?.genericProd?.name} no tiene suficiente stock para completar la orden. Stock actual: ${prod?.stock}, Stock requerido: ${x.count}`
        );
      }
    }
    let correctedPrice = 0
    prods.forEach(prod => {
      let discounts = prod.promotions.filter(x => this.filterPromoByDate(x.promotion)).map(x => x.promotion.discount * 0.01).reduce((a, b) => a + b, 0);
      correctedPrice += (prod.price - (prod.price * discounts)) * count[prod.id];
    })

    createOrderDto.price = correctedPrice;
    return this.orderRepository.createOrder(createOrderDto);
  }

  private filterPromoByDate(promotion: Promotion) {
    let now = new Date()
    return new Date(promotion.startDate) < now && new Date(promotion.endDate) > now;
  }

  async findAll(option: { search?: string, state?: string, order?: string }) {
    var orders = await this.orderRepository.findAllOrders();
    if (option.search) {
      orders = orders.filter(x => x.id.includes(option.search!));
    }
    if (option.state) {
      const states = option.state.split('-').map(x => this.stateParser[((x as any) as number) ?? 0]);
      orders = orders.filter(x => states.includes(x.state as OrderState));
    }
    if (option.order) {
      orders = orders.sort((x, y) => option.order == '1' ? x.createdAt.getTime() - y.createdAt.getTime() : y.createdAt.getTime() - x.createdAt.getTime())
    }
    return orders;
  }

  findOne(id: string) {
    return this.orderRepository.findOrderById(id);
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    if (updateOrderDto.state === OrderState.canceled) {
      const order = (await this.orderRepository.findOrderById(id)) as Order;
      order.products.forEach(async (x) => {
        const res = await this.variantService.update(x.productId, { setStock: x.count });

      });
    }
    return this.orderRepository.updateOrder(id, updateOrderDto);
  }

  remove(id: string) {
    return this.orderRepository.deleteOrder(id);
  }
}
