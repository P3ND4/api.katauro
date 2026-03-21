
import { SpecificProduct } from "generated/prisma";
import { CreateSpecProductDTO } from "../dto/create-sproduct.dto";
import { UpdateSpecProductDto } from "../dto/update-sproduct.dto";
import { Variant } from "../entities/product.entity";

export interface ISpecificProductRepository {
    findAllProducts(): Promise<SpecificProduct[]>;
    createProduct(data: CreateSpecProductDTO): Promise<SpecificProduct>;
    findProductById(id: string): Promise<SpecificProduct | null>;
    updateProduct(id: string, data: UpdateSpecProductDto): Promise<any>;
    deleteProduct(id: string): Promise<SpecificProduct>;
    findByGeneric(genId: string): Promise<SpecificProduct[]>
}