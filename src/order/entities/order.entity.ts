import { User } from "../../users/entities/user.entity";
import { ProductForOrder } from "./productForOrder.entity";


export class Order {
    id: string;
    userId: string;
    delivery: boolean;
    state: string;
    price: number;
    delPrice: number;
    createdAt: Date;
    user: User;
    address: string;
    province: string;
    city: string;
    note: string;
    name: string;
    lastName: string;
    email: string;
    phone: string;
    products: ProductForOrder[];
}

export enum OrderState {
    pending = 'Pendiente',
    completed = "Realizado",
    canceled = "Cancelado"
}