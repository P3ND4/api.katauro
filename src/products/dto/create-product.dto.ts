import { Categories } from "../entities/product.entity";

export class CreateProductDto {
    name: string;
    description?: string;
    subtitle: string;
    categorie: Categories;
}
