import { SpecProductRepository } from './spec-product.repository';
import { CreateSpecProductDTO } from '../dto/create-sproduct.dto';
import { UpdateSpecProductDto } from '../dto/update-sproduct.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class SpecProductService {
    private variantRep;
    private cloudy;
    constructor(variantRep: SpecProductRepository, cloudy: CloudinaryService);
    create(createSpecProductDTO: CreateSpecProductDTO): Promise<{
        genericId: string;
        id: string;
        image: string;
        price: number;
        colorId: string;
        position: number;
        stock: number;
    }>;
    update(id: string, updateSpecProductDto: UpdateSpecProductDto): Promise<{
        count: number;
    }>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<{
        genericId: string;
        id: string;
        image: string;
        price: number;
        colorId: string;
        position: number;
        stock: number;
    } | null>;
    findManyById(ids: string[]): import("generated/prisma").Prisma.PrismaPromise<({
        promotions: ({
            promotion: {
                name: string;
                promo_id: string;
                startDate: Date;
                endDate: Date;
                description: string;
                discountType: string;
                discount: number;
                Type: string;
            };
        } & {
            productId: string;
            promotionId: string;
        })[];
    } & {
        genericId: string;
        id: string;
        image: string;
        price: number;
        colorId: string;
        position: number;
        stock: number;
    })[]>;
    findByGeneric(id: string): Promise<{
        genericId: string;
        id: string;
        image: string;
        price: number;
        colorId: string;
        position: number;
        stock: number;
    }[]>;
}
