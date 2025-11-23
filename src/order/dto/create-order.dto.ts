import { ProductForOrder } from "../entities/productForOrder.entity";

export class CreateOrderDto {
        userId: string;
        delivery: boolean;
        state: string;
        totalPrice: number;
        createdAt: Date;
        productsID: {
                productId: string,
                count: number
        }[]
}
