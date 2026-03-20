import { OnModuleInit } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './products.repository';
import { Categories, Product } from './entities/product.entity';
import { propRepository } from './CatRepository';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class ProductsService implements OnModuleInit {
    private productRepository;
    private propRep;
    private cloudyService;
    readonly CatParser: Categories[];
    constructor(productRepository: ProductRepository, propRep: propRepository, cloudyService: CloudinaryService);
    onModuleInit(): void;
    findRandom(num: number): Promise<Product[]>;
    create(createProductDto: CreateProductDto): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        typology: string;
        vector: string;
        vPublicId: string | null;
        categoryId: string;
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
        typology: string;
        vector: string;
        vPublicId: string | null;
        categoryId: string;
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
        typology: string;
        vector: string;
        vPublicId: string | null;
        categoryId: string;
    } | null>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        typology: string;
        vector: string;
        vPublicId: string | null;
        categoryId: string;
    }>;
    remove(id: string): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        typology: string;
        vector: string;
        vPublicId: string | null;
        categoryId: string;
    }>;
    getProductByCategory(name: string, page?: number): Promise<Product[]>;
    getCatByName(name: string): Promise<import("./entities/product.entity").CatEntity[]>;
    getCats(): Promise<import("./entities/product.entity").CatEntity[]>;
    getFinishes(): Promise<import("./entities/product.entity").Finish[]>;
    createFinish(data: {
        image: string;
        text: string;
        public_id?: string;
    }): Promise<import("./entities/product.entity").Finish>;
    deleteFinish(id: string): Promise<import("./entities/product.entity").Finish>;
    getColors(): Promise<import("./entities/product.entity").Color[]>;
    createColor(data: {
        image: string;
        name: string;
        public_id?: string;
    }): Promise<import("./entities/product.entity").Color>;
    deleteColor(id: string): Promise<import("./entities/product.entity").Color>;
}
