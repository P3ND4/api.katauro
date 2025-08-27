import { Categories } from "../entities/product.entity";

export class CreateProductDto {
    name: string;
    description?: string;
    price: number;
    stock: number;
    image?: string;
    categorie: Categories;
}
