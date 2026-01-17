import { Injectable } from "@nestjs/common";
import { IOrderRepository } from "./repositories/IOrderRepository";
import { Order } from "generated/prisma";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { PrismaService } from "src/shared/services/prisma/prisma.service";

@Injectable()
export class OrderRepository implements IOrderRepository {
    constructor(private prismaService: PrismaService) { }
    findAllOrders(): Promise<Order[]> {
        return this.prismaService.order.findMany({ include: { products: { include: { product: { include: { genericProd: { include: { category: true } } } } } }, user: { include: { orders: true } } } });
    }
    createOrder(data: CreateOrderDto): Promise<Order> {
        


        return this.prismaService.order.create({
            data: {
                userId: data.userId,
                createdAt: data.createdAt,
                price: data.price,
                delPrice: data.delPrice,
                delivery: data.delivery,
                state: data.state,
                address: data.address,
                province: data.province,
                city: data.city,
                name: data.name,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
                note: data.note,
                products: {
                    create: data.productsID.map((prod) => ({
                        productId: prod.productId,
                        count: prod.count
                    }))
                }
            }, include: { products: { include: { product: true } }, user: { include: { orders: true } } }
        });
    }
    findOrderById(id: string): Promise<Order | null> {
        return this.prismaService.order.findUnique({ where: { id }, include: { products: { include: { product: { include: { genericProd: { include: { category: true } } } } } }, user: true } });
    }
    updateOrder(id: string, data: UpdateOrderDto): Promise<Order> {
        return this.prismaService.order.update({ where: { id }, data: data, include: { products: true, user: true } });
    }
    deleteOrder(id: string): Promise<Order> {
        return this.prismaService.order.delete({ where: { id }, include: { products: true, user: true } });
    }

}