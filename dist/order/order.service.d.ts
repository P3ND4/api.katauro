import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderRepository } from './order.repository';
export declare class OrderService {
    private orderRepository;
    constructor(orderRepository: OrderRepository);
    create(createOrderDto: CreateOrderDto): Promise<{
        id: string;
        userId: string;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        userId: string;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        userId: string;
        createdAt: Date;
    } | null>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<{
        id: string;
        userId: string;
        createdAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        userId: string;
        createdAt: Date;
    }>;
}
