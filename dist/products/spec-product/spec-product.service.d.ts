import { SpecProductRepository } from './spec-product.repository';
import { CreateSpecProductDTO } from '../dto/create-sproduct.dto';
import { UpdateSpecProductDto } from '../dto/update-sproduct.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class SpecProductService {
    private variantRep;
    private cloudy;
    constructor(variantRep: SpecProductRepository, cloudy: CloudinaryService);
    create(createSpecProductDTO: CreateSpecProductDTO): Promise<{
        image: string;
        id: string;
        genericId: string;
        price: number;
        colorId: string;
        stock: number;
    }>;
    update(id: string, updateSpecProductDto: UpdateSpecProductDto): Promise<{
        image: string;
        id: string;
        genericId: string;
        price: number;
        colorId: string;
        stock: number;
    }>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<{
        image: string;
        id: string;
        genericId: string;
        price: number;
        colorId: string;
        stock: number;
    } | null>;
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
        genericId: string;
        price: number;
        colorId: string;
        stock: number;
    })[]>;
    findByGeneric(id: string): Promise<{
        image: string;
        id: string;
        genericId: string;
        price: number;
        colorId: string;
        stock: number;
    }[]>;
}
