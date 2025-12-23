export declare class CreateOrderDto {
    userId: string;
    delivery: boolean;
    state: string;
    price: number;
    delPrice: number;
    createdAt: Date;
    name: string;
    lastName: string;
    email: string;
    phone: string;
    address?: string;
    province?: string;
    city?: string;
    note?: string;
    productsID: {
        productId: string;
        count: number;
    }[];
}
