import { Injectable } from "@nestjs/common";
import { IProductRepository } from "./repositorys/IProductRepository";
import { Product } from "generated/prisma";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ProductRepository implements IProductRepository{

    constructor(private prismaService: PrismaService){}

    findAllProducts(): Promise<Product[]> {
        return this.prismaService.product.findMany();
    }
    createProduct(data: CreateProductDto): Promise<Product> {
        return this.prismaService.product.create({data: data});
    }
    findProductById(id: string): Promise<Product | null> {
        return this.prismaService.product.findUnique({where: {id}})
    }
    updateProduct(id: string, data: UpdateProductDto): Promise<Product> {
        return this.prismaService.product.update({where: {id}, data})
    }
    deleteProduct(id: string): Promise<Product> {
        return this.prismaService.product.delete({where: {id}})
    }

}