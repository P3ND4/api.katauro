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
const prisma_service_1 = require("../prisma/prisma.service");
let ProductRepository = class ProductRepository {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAllProducts() {
        return this.prismaService.genericProduct.findMany({ include: { variants: true, details: true, category: true, finish: true } });
    }
    createProduct(data) {
        return this.prismaService.genericProduct.create({ data: {
                name: data.name,
                details: { create: data.details.map(x => ({ text: x })) },
                description: data.description,
                subtitle: data.subtitle,
            } });
    }
    findProductById(id) {
        return this.prismaService.genericProduct.findUnique({ where: { id }, include: { variants: true, details: true, category: true, finish: true } });
    }
    async updateProduct(id, data) {
        if (data.details && data.details.length > 0)
            await this.prismaService.details.deleteMany({ where: { idProd: id } });
        return this.prismaService.genericProduct.update({ where: { id }, data: {
                name: data.name,
                description: data.description,
                subtitle: data.subtitle,
                details: { create: data.details?.map(x => ({ text: x, id: x })) },
            } });
    }
    deleteProduct(id) {
        return this.prismaService.genericProduct.delete({ where: { id } });
    }
};
exports.ProductRepository = ProductRepository;
exports.ProductRepository = ProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductRepository);
//# sourceMappingURL=products.repository.js.map