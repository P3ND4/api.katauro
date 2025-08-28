import { Product } from "src/products/entities/product.entity";
import { User } from "../../users/entities/user.entity";
export declare class Order {
    id: string;
    userId: string;
    createdAt: Date;
    user: User;
    products: Product[];
}
