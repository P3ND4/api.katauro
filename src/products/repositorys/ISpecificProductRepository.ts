import { SpecificProduct } from "generated/prisma";
import { CreateSpecProductDTO } from "../dto/create-sproduct.dto";
import { UpdateSpecProductDto } from "../dto/update-sproduct.dto";

export interface ISpecificProductRepository {
    findAllProducts(): Promise<SpecificProduct[]>;
    createProduct(data: CreateSpecProductDTO): Promise<SpecificProduct>;
    findProductById(id: string): Promise<SpecificProduct | null>;
    updateProduct(id: string, data: UpdateSpecProductDto): Promise<SpecificProduct>;
    deleteProduct(id: string): Promise<SpecificProduct>;
    findByGeneric(genId: string): Promise<SpecificProduct[]>
}