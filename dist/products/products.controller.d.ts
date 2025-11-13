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
        typology: string;
        vector: string;
        categoryId: string;
    }>;
    productByCategoryName(name: string): Promise<import("./entities/product.entity").Product[]>;
    getFinishes(): Promise<import("./entities/product.entity").Finish[]>;
    deleteFinish(id: string): Promise<import("./entities/product.entity").Finish>;
    createFinish(data: any): Promise<import("./entities/product.entity").Finish>;
    findCats(): Promise<import("./entities/product.entity").CatEntity[]>;
    getColors(): Promise<import("./entities/product.entity").Color[]>;
    createColor(data: {
        image: string;
        name: string;
    }): Promise<import("./entities/product.entity").Color>;
    findAll(page: string, cat: string): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        typology: string;
        vector: string;
        categoryId: string;
    }[]> | Promise<import("./entities/product.entity").Product[]> | {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
    findPage(cat: string): Promise<number>;
    createVariant(createSpecProductDTO: CreateSpecProductDTO): Promise<{
        id: string;
        genericId: string;
        image: string;
        price: number;
        colorId: string;
        stock: number;
    }>;
    getVatiansForProduct(id: string): Promise<{
        id: string;
        genericId: string;
        image: string;
        price: number;
        colorId: string;
        stock: number;
    }[]>;
    getVariant(id: string): Promise<{
        id: string;
        genericId: string;
        image: string;
        price: number;
        colorId: string;
        stock: number;
    } | null>;
    deleteVaiant(id: string): Promise<{
        id: string;
        genericId: string;
        image: string;
        price: number;
        colorId: string;
        stock: number;
    }>;
    updateVariant(id: string, data: UpdateSpecProductDto): Promise<{
        id: string;
        genericId: string;
        image: string;
        price: number;
        colorId: string;
        stock: number;
    }>;
    findOne(id: string): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        typology: string;
        vector: string;
        categoryId: string;
    } | null>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        typology: string;
        vector: string;
        categoryId: string;
    }>;
    remove(id: string): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        typology: string;
        vector: string;
        categoryId: string;
    }>;
    deleteColor(id: string): Promise<import("./entities/product.entity").Color>;
}
