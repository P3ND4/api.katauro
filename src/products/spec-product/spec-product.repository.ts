import { Injectable } from "@nestjs/common";
import { ISpecificProductRepository } from "../repositorys/ISpecificProductRepository";
import { PrismaService } from "src/prisma/prisma.service";
import { SpecificProduct } from "generated/prisma";
import { CreateSpecProductDTO } from "../dto/create-sproduct.dto";
import { UpdateSpecProductDto } from "../dto/update-sproduct.dto";

@Injectable()
export class SpecProductRepository implements ISpecificProductRepository{

    constructor(private prismaService: PrismaService){}
    findByGeneric(genId: string): Promise<SpecificProduct[]> {
        return this.prismaService.specificProduct.findMany({where: {genericId: genId}, include: {images: true, genericProd: true}})
    }

    findAllProducts(): Promise<SpecificProduct[]> {
        return this.prismaService.specificProduct.findMany({include: {images: true, genericProd: true}});
    }
    createProduct(data: CreateSpecProductDTO): Promise<SpecificProduct> {
        return this.prismaService.specificProduct.create({data: data});
    }
    findProductById(id: string): Promise<SpecificProduct | null> {
        return this.prismaService.specificProduct.findUnique({where: {id}, include: {images: true, genericProd: true}})
    }
    updateProduct(id: string, data: UpdateSpecProductDto): Promise<SpecificProduct> {
        return this.prismaService.specificProduct.update({where: {id}, data})
    }
    deleteProduct(id: string): Promise<SpecificProduct> {
        return this.prismaService.specificProduct.delete({where: {id}})
    }

}