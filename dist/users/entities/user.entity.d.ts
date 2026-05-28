import { Order } from "src/order/entities/order.entity";
export declare class User {
    id: string;
    email: string;
    name: string;
    lastName: string;
    password: string | null;
    image: string;
    phone: string;
    orders?: Order[];
    emailVerified: boolean;
    emailVerificationCode: string;
    emailVerificationExpires: Date;
    createdAt: Date;
    updatedAt: Date;
}
