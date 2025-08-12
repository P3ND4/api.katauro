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
        return this.prismaService.order.findMany({include: {products: true, user: true}});
    }
    createOrder(data: CreateOrderDto): Promise<Order> {
        return this.prismaService.order.create({data: {
            userId: data.userId,
            createdAt: data.createdAt,  
            products: {create: data.productsID.map((prod)=>({
                productId: prod.productId,
                count: prod.count
            }))}
        },  include: {products: true, user: true}}); 
    }
    findOrderById(id: string): Promise<Order | null> {
        return this.prismaService.order.findUnique({where: {id}, include: {products: true, user: true}});
    }
    updateOrder(id: string, data: UpdateOrderDto): Promise<Order> {
        return this.prismaService.order.update({where: {id}, data: data, include: {products: true, user: true}});
    }
    deleteOrder(id: string): Promise<Order> {
        return this.prismaService.order.delete({where: {id}, include: {products: true, user: true}});
    }

}