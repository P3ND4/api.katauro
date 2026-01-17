import { Order } from "generated/prisma";
import { CreateOrderDto } from "../dto/create-order.dto";
import { UpdateOrderDto } from "../dto/update-order.dto";

export interface IOrderRepository{
        findAllOrders(): Promise<Order[]>;
        createOrder(data: CreateOrderDto): Promise<Order>;
        findOrderById(id: string): Promise<Order | null>;
        updateOrder(id: string, data: UpdateOrderDto): Promise<Order>;
        deleteOrder(id: string): Promise<Order>;
}