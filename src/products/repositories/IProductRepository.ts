import { GenericProduct } from "generated/prisma";
import { CreateProductDto } from "../dto/create-product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";

export interface IProductRepository {
    findAllProducts(): Promise<GenericProduct[]>;
    createProduct(data: CreateProductDto): Promise<GenericProduct>;
    findProductById(id: string): Promise<GenericProduct | null>;
    updateProduct(id: string, data: UpdateProductDto): Promise<GenericProduct>;
    deleteProduct(id: string): Promise<GenericProduct>;
}