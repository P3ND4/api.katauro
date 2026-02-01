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
        categoryId: string;
        typology: string;
        vector: string;
    }>;
    productByCategoryName(name: string): Promise<import("./entities/product.entity").Product[]>;
    getFinishes(): Promise<import("./entities/product.entity").Finish[]>;
    deleteFinish(id: string): Promise<import("./entities/product.entity").Finish>;
    deleteColor(id: string): Promise<import("./entities/product.entity").Color>;
    createFinish(data: any): Promise<import("./entities/product.entity").Finish>;
    findCats(): Promise<import("./entities/product.entity").CatEntity[]>;
    getColors(): Promise<import("./entities/product.entity").Color[]>;
    createColor(data: {
        image: string;
        name: string;
    }): Promise<import("./entities/product.entity").Color>;
    findAll(page: string, cat: string, search: string): Promise<import("./entities/product.entity").Product[]>;
    findPage(cat: string, search: string): Promise<number>;
    createVariant(createSpecProductDTO: CreateSpecProductDTO): Promise<{
        id: string;
        image: string;
        price: number;
        stock: number;
        colorId: string;
        genericId: string;
    }>;
    getVatiansForProduct(id: string): Promise<{
        id: string;
        image: string;
        price: number;
        stock: number;
        colorId: string;
        genericId: string;
    }[]>;
    getVariant(id: string): Promise<{
        id: string;
        image: string;
        price: number;
        stock: number;
        colorId: string;
        genericId: string;
    } | null>;
    deleteVaiant(id: string): Promise<void>;
    updateVariant(id: string, data: UpdateSpecProductDto): Promise<{
        id: string;
        image: string;
        price: number;
        stock: number;
        colorId: string;
        genericId: string;
    }>;
    findOne(id: string): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        categoryId: string;
        typology: string;
        vector: string;
    } | null>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        categoryId: string;
        typology: string;
        vector: string;
    }>;
    remove(id: string): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        categoryId: string;
        typology: string;
        vector: string;
    }>;
}
