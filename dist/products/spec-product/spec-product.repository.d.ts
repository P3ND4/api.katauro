import { ISpecificProductRepository } from "../repositories/ISpecificProductRepository";
import { PrismaService } from "src/shared/services/prisma/prisma.service";
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
    findManyById(ids: string[]): import("generated/prisma").Prisma.PrismaPromise<({
        promotions: ({
            promotion: {
                name: string;
                description: string;
                promo_id: string;
                startDate: Date;
                endDate: Date;
                discountType: string;
                discount: number;
                Type: string;
            };
        } & {
            productId: string;
            promotionId: string;
        })[];
    } & {
        image: string;
        id: string;
        position: number;
        price: number;
        stock: number;
        colorId: string;
        genericId: string;
    })[]>;
    updateProduct(id: string, data: UpdateSpecProductDto): Promise<SpecificProduct>;
    deleteProduct(id: string): Promise<SpecificProduct>;
}
