import { SpecProductRepository } from './spec-product.repository';
import { CreateSpecProductDTO } from '../dto/create-sproduct.dto';
import { UpdateSpecProductDto } from '../dto/update-sproduct.dto';
export declare class SpecProductService {
    private variantRep;
    constructor(variantRep: SpecProductRepository);
    create(createSpecProductDTO: CreateSpecProductDTO): Promise<{
        image: string | null;
        id: string;
        genericId: string;
        variantName: string;
        price: number;
        stock: number;
        color: string;
    }>;
    update(id: string, updateSpecProductDto: UpdateSpecProductDto): Promise<{
        image: string | null;
        id: string;
        genericId: string;
        variantName: string;
        price: number;
        stock: number;
        color: string;
    }>;
    delete(id: string): Promise<{
        image: string | null;
        id: string;
        genericId: string;
        variantName: string;
        price: number;
        stock: number;
        color: string;
    }>;
    findById(id: string): Promise<{
        image: string | null;
        id: string;
        genericId: string;
        variantName: string;
        price: number;
        stock: number;
        color: string;
    } | null>;
    findByGeneric(id: string): Promise<{
        image: string | null;
        id: string;
        genericId: string;
        variantName: string;
        price: number;
        stock: number;
        color: string;
    }[]>;
}
