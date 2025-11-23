import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(createOrderDto: CreateOrderDto): Promise<{
        id: string;
        userId: string;
        delivery: boolean;
        state: string;
        totalPrice: number;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        userId: string;
        delivery: boolean;
        state: string;
        totalPrice: number;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        userId: string;
        delivery: boolean;
        state: string;
        totalPrice: number;
        createdAt: Date;
    } | null>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<{
        id: string;
        userId: string;
        delivery: boolean;
        state: string;
        totalPrice: number;
        createdAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        userId: string;
        delivery: boolean;
        state: string;
        totalPrice: number;
        createdAt: Date;
    }>;
}
