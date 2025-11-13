import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './products.repository';
import { Categories, Product } from './entities/product.entity';
import { propRepository } from './CatRepository';
export declare class ProductsService {
    private productRepository;
    private propRep;
    readonly CatParser: Categories[];
    constructor(productRepository: ProductRepository, propRep: propRepository);
    create(createProductDto: CreateProductDto): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        typology: string;
        vector: string;
        categoryId: string;
    }>;
    findAll(): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        typology: string;
        vector: string;
        categoryId: string;
    }[]>;
    findPage(page: number): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        typology: string;
        vector: string;
        categoryId: string;
    }[]>;
    getPages(category?: string): Promise<number>;
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
    getProductByCategory(name: string, page?: number): Promise<Product[]>;
    getCatByName(name: string): Promise<import("./entities/product.entity").CatEntity[]>;
    getCats(): Promise<import("./entities/product.entity").CatEntity[]>;
    getFinishes(): Promise<import("./entities/product.entity").Finish[]>;
    createFinish(data: any): Promise<import("./entities/product.entity").Finish>;
    deleteFinish(id: string): Promise<import("./entities/product.entity").Finish>;
    getColors(): Promise<import("./entities/product.entity").Color[]>;
    createColor(data: {
        image: string;
        name: string;
    }): Promise<import("./entities/product.entity").Color>;
    deleteColor(id: string): Promise<import("./entities/product.entity").Color>;
}
