import { Product } from "src/products/entities/product.entity";
import { ProdForOrder } from "../entities/productForOrder.entity";

export class CreateOrderDto {
        id: string;
        userId: string;
        createdAt: Date;
        productsID: ProdForOrder[] 
}
