import { Typology } from "../entities/product.entity";
import { CreateSpecProductDTO } from "./create-sproduct.dto";
export declare class CreateProductDto {
    name: string;
    description: string;
    subtitle: string;
    categoryId: string;
    typology: Typology;
    vector: string;
    finishId: string[];
    variants: CreateSpecProductDTO[];
    details: string[];
}
