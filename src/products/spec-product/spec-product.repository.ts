import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
import { ISpecificProductRepository } from "../repositories/ISpecificProductRepository";
import { PrismaService } from "src/shared/services/prisma/prisma.service";
import { SpecificProduct } from "generated/prisma";
import { CreateSpecProductDTO } from "../dto/create-sproduct.dto";
import { UpdateSpecProductDto } from "../dto/update-sproduct.dto";
import { Variant } from "../entities/product.entity";


//TODO: Arreglar los servicios de update y create
@Injectable()
export class SpecProductRepository implements ISpecificProductRepository {

    constructor(private prismaService: PrismaService) { }
    findByGeneric(genId: string): Promise<SpecificProduct[]> {
        return this.prismaService.specificProduct.findMany({ where: { genericId: genId }, include: { images: true, models3D: true, genericProd: true, color: true } });
    }

    findAllProducts(): Promise<SpecificProduct[]> {
        return this.prismaService.specificProduct.findMany({ include: { images: true, models3D: true, genericProd: true, color: true } });
    }
    createProduct(data: CreateSpecProductDTO): Promise<SpecificProduct> {
        return this.prismaService.specificProduct.create({ data: { stock: data.stock, price: data.price, image: data.image, genericId: '', images: { create: data.images.map(x => ({ link: x.link, publicId: x.public_id })) }, models3D: { create: data.models3D.map(x => ({ url: x.url, publicId: x.public_id })) }, colorId: data.colorId } });
    }
    findProductById(id: string): Promise<SpecificProduct | null> {
        return this.prismaService.specificProduct.findUnique({ where: { id }, include: { images: true, models3D: true, genericProd: true, color: true } })
    }

    findManyById(ids: string[]) {
        return this.prismaService.specificProduct.findMany({ where: { id: { in: ids } }, include: { promotions: { include: { promotion: true } } } });
    }

    //TODO: Problemon al actualizar stock, pudiera hacerse negativo
    async updateProduct(id: string, data: UpdateSpecProductDto): Promise<any> {
        const result = await this.prismaService.specificProduct.updateMany({
            where: { id, stock: { gte: data.setStock ? Math.abs(data.setStock) : 0 } },
            data:
            {
                stock: data.setStock !== undefined
                    ? data.setStock > 0
                        ? { increment: data.setStock }
                        : { decrement: Math.abs(data.setStock) }
                    : data.stock !== undefined
                        ? data.stock
                        : undefined,
                price: data.price,
                image: data.image,
                genericId: data.genericId,
                //images: { create: data.images?.map(x => ({ link: x.link, publicId: x.public_id })) },
                colorId: data.colorId
            }
        });

        return result
    }
    deleteProduct(id: string): Promise<SpecificProduct> {
        return this.prismaService.specificProduct.delete({ where: { id }, include: { images: true, models3D: true } })
    }

}