import { Injectable } from "@nestjs/common";
import { IProductRepository } from "./repositories/IProductRepository";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { PrismaService } from "src/shared/services/prisma/prisma.service";
import { GenericProduct } from "generated/prisma";
import { CreateSpecProductDTO } from "./dto/create-sproduct.dto";
import { link } from "fs";


@Injectable()
export class ProductRepository implements IProductRepository {

    constructor(private prismaService: PrismaService) { }

    findAllProducts(): Promise<GenericProduct[]> {
        return this.prismaService.genericProduct.findMany({ include: { variants: { include: { genericProd: { include: { category: true } }, images: { orderBy: { position: "asc" } }, color: true, promotions: { include: { promotion: true } } }, orderBy: { position: "asc" } }, details: true, category: true, finish: true } });
    }
    createProduct(data: CreateProductDto): Promise<GenericProduct> {
        return this.prismaService.genericProduct.create({
            data: {
                name: data.name,
                details: { create: data.details.map(x => ({ text: x })) },
                description: data.description,
                categoryId: data.categoryId,
                typology: data.typology,
                subtitle: data.subtitle,
                vector: data.vector,
                vPublicId: data.vPublicId,
                finish: { create: data.finishId.map(x => ({ finishId: x })) },
                variants: {
                    create: data.variants.map((x: CreateSpecProductDTO) => ({
                        colorId: x.colorId,
                        stock: x.stock,
                        image: x.image,
                        price: x.price,
                        position: data.variants.indexOf(x),
                        images: { create: x.images.map(y => ({ position: x.images.indexOf(y), link: y.link, publicId: y.public_id })) }
                    }))
                }
            }
        });
    }
    findProductById(id: string): Promise<GenericProduct | null> {
        return this.prismaService.genericProduct.findUnique({ where: { id }, include: { variants: { orderBy: { position: "asc" }, include: { genericProd: { include: { category: true } }, images: { orderBy: { position: "asc" } }, color: true, promotions: { include: { promotion: true } } } }, details: true, category: true, finish: true } })
    }
    async updateProduct(id: string, data: UpdateProductDto): Promise<GenericProduct> {

        await this.prismaService.genericProduct.update({
            where: { id },
            data: {
                // Eliminar relaciones existentes
                details: { deleteMany: {} },
                finish: { deleteMany: {} },
            },
        });

        //if (data.details && data.details.length > 0) await this.prismaService.details.deleteMany({ where: { idProd: id } })

        return this.prismaService.genericProduct.update({
            where: { id }, data: {
                name: data.name,
                description: data.description,
                categoryId: data.categoryId,
                typology: data.typology,
                subtitle: data.subtitle,
                details: { create: data.details?.map(x => ({ text: x })) },
                vector: data.vector,
                vPublicId: data.vPublicId,
                finish: { create: data.finishId?.map(x => ({ finishId: x })) },
                variants: {
                    update: data.variants?.map((x: CreateSpecProductDTO) => ({
                        where: { id: x.id }, data: {
                            colorId: x.colorId,
                            stock: x.stock,
                            image: x.image,
                            price: x.price,
                            images: { deleteMany: {}, create: x.images.map(y => ({ position: x.images.indexOf(y), link: y.link, publicId: y.public_id })) }
                        }
                    }))
                }
            }

        })
    }
    deleteProduct(id: string): Promise<GenericProduct> {
        return this.prismaService.genericProduct.delete({ where: { id }, include: { variants: { include: { images: true } } } });
    }

}