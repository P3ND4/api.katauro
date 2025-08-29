import { Injectable } from "@nestjs/common";
import { IProductRepository } from "./repositorys/IProductRepository";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { GenericProduct } from "generated/prisma";

@Injectable()
export class ProductRepository implements IProductRepository{

    constructor(private prismaService: PrismaService){}

    findAllProducts(): Promise<GenericProduct[]> {
        return this.prismaService.genericProduct.findMany({include: {variants: true, details: true, categorie: true}});
    }
    createProduct(data: CreateProductDto): Promise<GenericProduct> {
        return this.prismaService.genericProduct.create({data: data});
    }
    findProductById(id: string): Promise<GenericProduct | null> {
        return this.prismaService.genericProduct.findUnique({where: {id}, include: {variants: true, details: true, categorie: true}})
    }
    updateProduct(id: string, data: UpdateProductDto): Promise<GenericProduct> {
        return this.prismaService.genericProduct.update({where: {id}, data})
    }
    deleteProduct(id: string): Promise<GenericProduct> {
        return this.prismaService.genericProduct.delete({where: {id}})
    }

}