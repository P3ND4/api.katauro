import { Order } from "src/order/entities/order.entity";

export class User {
    id: string;
    email: string;
    name: string;
    lastName: string;
    password: string;
    image: string;
    phone: number;
    orders?: Order[]
}