"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../shared/services/prisma/prisma.service");
let ProductRepository = class ProductRepository {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAllProducts() {
        return this.prismaService.genericProduct.findMany({ include: { variants: { include: { genericProd: { include: { category: true } }, images: { orderBy: { position: "asc" } }, models3D: true, color: true, promotions: { include: { promotion: true } } }, orderBy: { position: "asc" } }, details: true, category: true, finish: true } });
    }
    createProduct(data) {
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
                    create: data.variants.map((x) => ({
                        colorId: x.colorId,
                        stock: x.stock,
                        image: x.image,
                        price: x.price,
                        position: data.variants.indexOf(x),
                        images: { create: x.images.map(y => ({ position: x.images.indexOf(y), link: y.link, publicId: y.public_id })) },
                        models3D: { create: x.models3D?.map(y => ({ url: y.url, publicId: y.public_id })) || [] }
                    }))
                }
            }
        });
    }
    findProductById(id) {
        return this.prismaService.genericProduct.findUnique({ where: { id }, include: { variants: { orderBy: { position: "asc" }, include: { genericProd: { include: { category: true } }, images: { orderBy: { position: "asc" } }, models3D: true, color: true, promotions: { include: { promotion: true } } } }, details: true, category: true, finish: true } });
    }
    async updateProduct(id, data) {
        await this.prismaService.genericProduct.update({
            where: { id },
            data: {
                details: { deleteMany: {} },
                finish: { deleteMany: {} },
            },
        });
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
                    update: data.variants?.map((x) => ({
                        where: { id: x.id }, data: {
                            colorId: x.colorId,
                            stock: x.stock,
                            image: x.image,
                            price: x.price,
                            images: { deleteMany: {}, create: x.images.map(y => ({ position: x.images.indexOf(y), link: y.link, publicId: y.public_id })) },
                            models3D: { deleteMany: {}, create: x.models3D?.map(y => ({ url: y.url, publicId: y.public_id })) || [] }
                        }
                    }))
                }
            }
        });
    }
    deleteProduct(id) {
        return this.prismaService.genericProduct.delete({ where: { id }, include: { variants: { include: { images: true, models3D: true } } } });
    }
};
exports.ProductRepository = ProductRepository;
exports.ProductRepository = ProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductRepository);
//# sourceMappingURL=products.repository.js.map