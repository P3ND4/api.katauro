import { Injectable } from "@nestjs/common";
import { IOrderRepository } from "./repositorys/IOrderRepository";
import { Order } from "generated/prisma";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class OrderRepository implements IOrderRepository{
    constructor(private prismaService: PrismaService){}
    findAllOrders(): Promise<Order[]> {
        return this.prismaService.order.findMany();
    }
    createOrder(data: CreateOrderDto): Promise<Order> {
        return this.prismaService.order.create({data});

    }
    findOrderById(id: string): Promise<Order | null> {
        return this.prismaService.order.findUnique({where: {id}});
    }
    updateOrder(id: string, data: UpdateOrderDto): Promise<Order> {
        return this.prismaService.order.update({where: {id}, data: data});
    }
    deleteOrder(id: string): Promise<Order> {
        return this.prismaService.order.delete({where: {id}});
    }

}