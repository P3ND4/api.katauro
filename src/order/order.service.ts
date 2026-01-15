import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderRepository } from './order.repository';
import { Order, OrderState } from './entities/order.entity';
import { SpecProductService } from 'src/products/spec-product/spec-product.service';

@Injectable()
export class OrderService {
  constructor(private orderRepository: OrderRepository, private variantService: SpecProductService) { }
  stateParser = [OrderState.canceled, OrderState.completed, OrderState.pending]
  async create(createOrderDto: CreateOrderDto) {
    createOrderDto.productsID.forEach(x => this.variantService.update(x.productId, { setStock: - x.count }));
    return this.orderRepository.createOrder(createOrderDto);
  }

  async findAll(option: { search?: string, state?: string, order?: string }) {
    var orders = await this.orderRepository.findAllOrders()
    if (option.search) {
      orders = orders.filter(x => x.id.includes(option.search!))
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
        await this.variantService.update(x.productId, { setStock: x.count });
      });
    }
    return this.orderRepository.updateOrder(id, updateOrderDto);
  }

  remove(id: string) {
    return this.orderRepository.deleteOrder(id);
  }
}
