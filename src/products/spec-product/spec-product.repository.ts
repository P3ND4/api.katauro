import { Injectable } from "@nestjs/common";
import { ISpecificProductRepository } from "../repositorys/ISpecificProductRepository";
import { PrismaService } from "src/prisma/prisma.service";
import { SpecificProduct } from "generated/prisma";
import { CreateSpecProductDTO } from "../dto/create-sproduct.dto";
import { UpdateSpecProductDto } from "../dto/update-sproduct.dto";


//TODO: Arreglar los servicios de update y create
@Injectable()
export class SpecProductRepository implements ISpecificProductRepository {

    constructor(private prismaService: PrismaService) { }
    findByGeneric(genId: string): Promise<SpecificProduct[]> {
        return this.prismaService.specificProduct.findMany({ where: { genericId: genId }, include: { images: true, genericProd: true, color: true } })
    }

    findAllProducts(): Promise<SpecificProduct[]> {
        return this.prismaService.specificProduct.findMany({ include: { images: true, genericProd: true, color: true } });
    }
    createProduct(data: CreateSpecProductDTO): Promise<SpecificProduct> {
        return this.prismaService.specificProduct.create({ data: { stock: data.stock, price: data.price, image: data.image, genericId: '', images: { create: data.images.map(x => ({ link: x })) }, colorId: data.colorId } });
    }
    findProductById(id: string): Promise<SpecificProduct | null> {
        return this.prismaService.specificProduct.findUnique({ where: { id }, include: { images: true, genericProd: true, color: true } })
    }
    updateProduct(id: string, data: UpdateSpecProductDto): Promise<SpecificProduct> {
        return this.prismaService.specificProduct.update({ where: { id }, data: { stock: data.stock, price: data.price, image: data.image, genericId: '', images: { create: data.images?.map(x => ({ link: x })) }, colorId: data.colorId } })
    }
    deleteProduct(id: string): Promise<SpecificProduct> {
        return this.prismaService.specificProduct.delete({ where: { id } })
    }

}