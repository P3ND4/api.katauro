export declare class CreateOrderDto {
    userId: string;
    delivery: boolean;
    state: string;
    totalPrice: number;
    createdAt: Date;
    productsID: {
        productId: string;
        count: number;
    }[];
}
