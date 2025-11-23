import { Variant } from "src/products/entities/product.entity";

export class ProductForOrder {
    orderId: string;
    productId: string;
    count: number;
    //order     Order           @relation(fields: [orderId], references: [id], "OrderProducts", onDelete: Cascade)
    product: Variant;

}