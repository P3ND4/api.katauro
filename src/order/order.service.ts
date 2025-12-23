import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderRepository } from './order.repository';
import { OrderState } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(private orderRepository: OrderRepository) { }
  stateParser = [OrderState.canceled, OrderState.completed, OrderState.pending]
  create(createOrderDto: CreateOrderDto) {
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

    return orders
  }

  findOne(id: string) {
    return this.orderRepository.findOrderById(id);
  }
  
  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository.updateOrder(id, updateOrderDto);
  }

  remove(id: string) {
    return this.orderRepository.deleteOrder(id);
  }
}
