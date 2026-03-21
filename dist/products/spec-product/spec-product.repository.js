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
exports.SpecProductRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/services/prisma/prisma.service");
let SpecProductRepository = class SpecProductRepository {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findByGeneric(genId) {
        return this.prismaService.specificProduct.findMany({ where: { genericId: genId }, include: { images: true, genericProd: true, color: true } });
    }
    findAllProducts() {
        return this.prismaService.specificProduct.findMany({ include: { images: true, genericProd: true, color: true } });
    }
    createProduct(data) {
        return this.prismaService.specificProduct.create({ data: { stock: data.stock, price: data.price, image: data.image, genericId: '', images: { create: data.images.map(x => ({ link: x.link, publicId: x.public_id })) }, colorId: data.colorId } });
    }
    findProductById(id) {
        return this.prismaService.specificProduct.findUnique({ where: { id }, include: { images: true, genericProd: true, color: true } });
    }
    findManyById(ids) {
        return this.prismaService.specificProduct.findMany({ where: { id: { in: ids } }, include: { promotions: { include: { promotion: true } } } });
    }
    async updateProduct(id, data) {
        const result = await this.prismaService.specificProduct.updateMany({
            where: { id, stock: { gte: data.setStock ? Math.abs(data.setStock) : 0 } },
            data: {
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
                colorId: data.colorId
            }
        });
        return result;
    }
    deleteProduct(id) {
        return this.prismaService.specificProduct.delete({ where: { id }, include: { images: true } });
    }
};
exports.SpecProductRepository = SpecProductRepository;
exports.SpecProductRepository = SpecProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SpecProductRepository);
//# sourceMappingURL=spec-product.repository.js.map