import { ProdForOrder } from "../entities/productForOrder.entity";
export declare class CreateOrderDto {
    id: string;
    userId: string;
    createdAt: Date;
    productsID: ProdForOrder[];
}
