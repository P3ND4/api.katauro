import { ISpecificProductRepository } from "../repositorys/ISpecificProductRepository";
import { PrismaService } from "src/prisma/prisma.service";
import { SpecificProduct } from "generated/prisma";
import { CreateSpecProductDTO } from "../dto/create-sproduct.dto";
import { UpdateSpecProductDto } from "../dto/update-sproduct.dto";
export declare class SpecProductRepository implements ISpecificProductRepository {
    private prismaService;
    constructor(prismaService: PrismaService);
    findByGeneric(genId: string): Promise<SpecificProduct[]>;
    findAllProducts(): Promise<SpecificProduct[]>;
    createProduct(data: CreateSpecProductDTO): Promise<SpecificProduct>;
    findProductById(id: string): Promise<SpecificProduct | null>;
    updateProduct(id: string, data: UpdateSpecProductDto): Promise<SpecificProduct>;
    deleteProduct(id: string): Promise<SpecificProduct>;
}
