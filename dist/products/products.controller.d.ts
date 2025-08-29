import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateSpecProductDTO } from './dto/create-sproduct.dto';
import { SpecProductService } from './spec-product/spec-product.service';
import { UpdateSpecProductDto } from './dto/update-sproduct.dto';
export declare class ProductsController {
    private readonly productsService;
    private readonly specProdService;
    constructor(productsService: ProductsService, specProdService: SpecProductService);
    create(createProductDto: CreateProductDto): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        categorieId: string;
        vector: string;
    }>;
    findAll(): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        categorieId: string;
        vector: string;
    }[]>;
    createVariant(createSpecProductDTO: CreateSpecProductDTO): Promise<{
        image: string | null;
        id: string;
        genericId: string;
        variantName: string;
        price: number;
        stock: number;
        color: string;
    }>;
    getVatiansForProduct(id: string): Promise<{
        image: string | null;
        id: string;
        genericId: string;
        variantName: string;
        price: number;
        stock: number;
        color: string;
    }[]>;
    getVariant(id: string): Promise<{
        image: string | null;
        id: string;
        genericId: string;
        variantName: string;
        price: number;
        stock: number;
        color: string;
    } | null>;
    deleteVaiant(id: string): Promise<{
        image: string | null;
        id: string;
        genericId: string;
        variantName: string;
        price: number;
        stock: number;
        color: string;
    }>;
    updateVariant(id: string, data: UpdateSpecProductDto): Promise<{
        image: string | null;
        id: string;
        genericId: string;
        variantName: string;
        price: number;
        stock: number;
        color: string;
    }>;
    findOne(id: string): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        categorieId: string;
        vector: string;
    } | null>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        categorieId: string;
        vector: string;
    }>;
    remove(id: string): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        categorieId: string;
        vector: string;
    }>;
}
