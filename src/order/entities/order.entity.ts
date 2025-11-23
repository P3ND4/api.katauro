import { User } from "../../users/entities/user.entity";
import { ProductForOrder } from "./productForOrder.entity";


export class Order {
    id: string;
    userId: string;
    delivery: boolean;
    state: string;
    totalPrice: number;
    createdAt: Date;
    user: User;
    products: ProductForOrder[];
}

export enum OrderState {
    pending = 'Pendiente',
    completed = "Realizado",
    canceled = "Cancelado"
}