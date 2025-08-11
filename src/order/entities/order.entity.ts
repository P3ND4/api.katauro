import { Product } from "src/products/entities/product.entity";
import { User } from "../../users/entities/user.entity";

export class Order {
    id: string;
    userId: string;
    quantity: number;
    createdAt: Date;
    user: User;
    products: Product[];
}
