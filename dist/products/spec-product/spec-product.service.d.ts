import { SpecProductRepository } from './spec-product.repository';
import { CreateSpecProductDTO } from '../dto/create-sproduct.dto';
import { UpdateSpecProductDto } from '../dto/update-sproduct.dto';
export declare class SpecProductService {
    private variantRep;
    constructor(variantRep: SpecProductRepository);
    create(createSpecProductDTO: CreateSpecProductDTO): Promise<{
        image: string;
        id: string;
        price: number;
        stock: number;
        colorId: string;
        genericId: string;
    }>;
    update(id: string, updateSpecProductDto: UpdateSpecProductDto): Promise<{
        image: string;
        id: string;
        price: number;
        stock: number;
        colorId: string;
        genericId: string;
    }>;
    delete(id: string): Promise<{
        image: string;
        id: string;
        price: number;
        stock: number;
        colorId: string;
        genericId: string;
    }>;
    findById(id: string): Promise<{
        image: string;
        id: string;
        price: number;
        stock: number;
        colorId: string;
        genericId: string;
    } | null>;
    findByGeneric(id: string): Promise<{
        image: string;
        id: string;
        price: number;
        stock: number;
        colorId: string;
        genericId: string;
    }[]>;
}
