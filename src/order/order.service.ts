import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
  constructor(private orderRepository: OrderRepository){}
  create(createOrderDto: CreateOrderDto) {
    return this.orderRepository.createOrder(createOrderDto);
  }

  findAll() {
    return this.orderRepository.findAllOrders();
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
