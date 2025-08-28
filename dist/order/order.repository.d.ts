import { IOrderRepository } from "./repositorys/IOrderRepository";
import { Order } from "generated/prisma";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { PrismaService } from "src/prisma/prisma.service";
export declare class OrderRepository implements IOrderRepository {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAllOrders(): Promise<Order[]>;
    createOrder(data: CreateOrderDto): Promise<Order>;
    findOrderById(id: string): Promise<Order | null>;
    updateOrder(id: string, data: UpdateOrderDto): Promise<Order>;
    deleteOrder(id: string): Promise<Order>;
}
