import { SpecProductRepository } from './spec-product.repository';
import { CreateSpecProductDTO } from '../dto/create-sproduct.dto';
import { UpdateSpecProductDto } from '../dto/update-sproduct.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class SpecProductService {
    private variantRep;
    private cloudy;
    constructor(variantRep: SpecProductRepository, cloudy: CloudinaryService);
    create(createSpecProductDTO: CreateSpecProductDTO): Promise<{
        id: string;
        image: string;
        price: number;
        stock: number;
        colorId: string;
        genericId: string;
    }>;
    update(id: string, updateSpecProductDto: UpdateSpecProductDto): Promise<{
        id: string;
        image: string;
        price: number;
        stock: number;
        colorId: string;
        genericId: string;
    }>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<{
        id: string;
        image: string;
        price: number;
        stock: number;
        colorId: string;
        genericId: string;
    } | null>;
    findByGeneric(id: string): Promise<{
        id: string;
        image: string;
        price: number;
        stock: number;
        colorId: string;
        genericId: string;
    }[]>;
}
