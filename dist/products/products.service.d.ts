import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './products.repository';
import { Product } from './entities/product.entity';
import { catRepository } from './CatRepository';
export declare class ProductsService {
    private productRepository;
    private catRep;
    constructor(productRepository: ProductRepository, catRep: catRepository);
    create(createProductDto: CreateProductDto): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        categoryId: string;
        vector: string;
    }>;
    findAll(): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        categoryId: string;
        vector: string;
    }[]>;
    findPage(page: number): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        categoryId: string;
        vector: string;
    }[]>;
    getPages(): Promise<number>;
    findOne(id: string): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        categoryId: string;
        vector: string;
    } | null>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        categoryId: string;
        vector: string;
    }>;
    remove(id: string): Promise<{
        name: string;
        id: string;
        description: string;
        subtitle: string;
        categoryId: string;
        vector: string;
    }>;
    getProductByCategory(name: string): Promise<Product[]>;
    getCatByName(name: string): Promise<import("./entities/product.entity").CatEntity[]>;
    getCats(): Promise<import("./entities/product.entity").CatEntity[]>;
}
