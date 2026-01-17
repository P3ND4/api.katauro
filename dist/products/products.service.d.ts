import { OnModuleInit } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './products.repository';
import { Categories, Product } from './entities/product.entity';
import { propRepository } from './CatRepository';
export declare class ProductsService implements OnModuleInit {
    private productRepository;
    private propRep;
    readonly CatParser: Categories[];
    constructor(productRepository: ProductRepository, propRep: propRepository);
    onModuleInit(): void;
    create(createProductDto: CreateProductDto): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        categoryId: string;
        typology: string;
        vector: string;
    }>;
    findAll(options?: {
        category?: string;
        search?: string;
        page?: number;
    }): Promise<Product[]>;
    findPage(page: number): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        categoryId: string;
        typology: string;
        vector: string;
    }[]>;
    getPages(options?: {
        category?: string;
        search?: string;
    }): Promise<number>;
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
