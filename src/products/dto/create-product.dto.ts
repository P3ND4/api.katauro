import { Categories, Typology, Variant } from "../entities/product.entity";
import { CreateSpecProductDTO } from "./create-sproduct.dto";

export class CreateProductDto {
    name: string;
    description: string;
    subtitle: string;
    categoryId: string;
    typology: Typology
    vector: string;
    vPublicId?: string;
    finishId: string[]
    variants: CreateSpecProductDTO[]
    details: string[]

}
