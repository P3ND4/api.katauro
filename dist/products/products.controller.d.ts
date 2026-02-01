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
    create(createProductDto: CreateProductDto): Promise<GenericProduct>;
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
    createVariant(createSpecProductDTO: CreateSpecProductDTO): Promise<SpecificProduct>;
    getVatiansForProduct(id: string): Promise<SpecificProduct[]>;
    getVariant(id: string): Promise<any>;
    deleteVaiant(id: string): Promise<void>;
    updateVariant(id: string, data: UpdateSpecProductDto): Promise<SpecificProduct>;
    findOne(id: string): Promise<any>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<GenericProduct>;
    remove(id: string): Promise<GenericProduct>;
}
