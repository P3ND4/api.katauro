import { IProductRepository } from "./repositorys/IProductRepository";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { GenericProduct } from "generated/prisma";
export declare class ProductRepository implements IProductRepository {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAllProducts(): Promise<GenericProduct[]>;
    createProduct(data: CreateProductDto): Promise<GenericProduct>;
    findProductById(id: string): Promise<GenericProduct | null>;
    updateProduct(id: string, data: UpdateProductDto): Promise<GenericProduct>;
    deleteProduct(id: string): Promise<GenericProduct>;
}
