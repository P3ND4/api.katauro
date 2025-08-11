import { Product } from "generated/prisma";
import { CreateProductDto } from "../dto/create-product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";

export interface IProductRepository {
    findAllProducts(): Promise<Product[]>;
    createProduct(data: CreateProductDto): Promise<Product>;
    findProductById(id: string): Promise<Product | null>;
    updateProduct(id: string, data: UpdateProductDto): Promise<Product>;
    deleteProduct(id: string): Promise<Product>;
}