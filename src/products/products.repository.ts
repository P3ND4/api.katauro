import { Injectable } from "@nestjs/common";
import { IProductRepository } from "./repositorys/IProductRepository";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { GenericProduct } from "generated/prisma";
import { CreateSpecProductDTO } from "./dto/create-sproduct.dto";
import { link } from "fs";


@Injectable()
export class ProductRepository implements IProductRepository {

    constructor(private prismaService: PrismaService) { }

    findAllProducts(): Promise<GenericProduct[]> {
        return this.prismaService.genericProduct.findMany({ include: { variants: true, details: true, category: true, finish: true } });
    }
    createProduct(data: CreateProductDto): Promise<GenericProduct> {
        return this.prismaService.genericProduct.create({
            data: {
                name: data.name,
                details: { create: data.details.map(x => ({ text: x })) },
                description: data.description,
                subtitle: data.subtitle,
                vector: data.vector,
                finish: { create: data.finishId.map(x => ({ finishId: x })) },
                variants: {
                    create: data.variants.map((x: CreateSpecProductDTO) => ({
                        colorId: x.colorId,
                        stock: x.stock,
                        image: x.image,
                        price: x.price,
                        images: { create: x.images.map(y => ({ link: y })) }
                    }))
                }
            }
        });
    }
    findProductById(id: string): Promise<GenericProduct | null> {
        return this.prismaService.genericProduct.findUnique({ where: { id }, include: { variants: true, details: true, category: true, finish: true } })
    }
    async updateProduct(id: string, data: UpdateProductDto): Promise<GenericProduct> {

        await this.prismaService.genericProduct.update({
            where: { id },
            data: {
                // Eliminar relaciones existentes
                details: { deleteMany: {} },
                finish: { deleteMany: {} },
                variants: {
                    deleteMany: {},
                },
            },
        });

        //if (data.details && data.details.length > 0) await this.prismaService.details.deleteMany({ where: { idProd: id } })

        return this.prismaService.genericProduct.update({
            where: { id }, data: {
                name: data.name,
                description: data.description,
                subtitle: data.subtitle,
                details: { create: data.details?.map(x => ({ text: x })) },
                finish: { create: data.finishId?.map(x => ({ finishId: x })) },
                variants: {
                    create: data.variants?.map((x: CreateSpecProductDTO) => ({
                        colorId: x.colorId,
                        stock: x.stock,
                        image: x.image,
                        price: x.price,
                        images: { create: x.images.map(y => ({ link: y })) }
                    }))
                }
            }
        })
    }
    deleteProduct(id: string): Promise<GenericProduct> {
        return this.prismaService.genericProduct.delete({ where: { id } })
    }

}