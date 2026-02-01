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
    create(createProductDto: CreateProductDto): Promise<GenericProduct>;
    findAll(options?: {
        category?: string;
        search?: string;
        page?: number;
    }): Promise<Product[]>;
    findPage(page: number): Promise<GenericProduct[]>;
    getPages(options?: {
        category?: string;
        search?: string;
    }): Promise<number>;
    findOne(id: string): Promise<any>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<GenericProduct>;
    remove(id: string): Promise<GenericProduct>;
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
