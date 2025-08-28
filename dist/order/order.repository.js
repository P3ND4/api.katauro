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
exports.OrderRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let OrderRepository = class OrderRepository {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAllOrders() {
        return this.prismaService.order.findMany({ include: { products: true, user: true } });
    }
    createOrder(data) {
        return this.prismaService.order.create({ data: {
                userId: data.userId,
                createdAt: data.createdAt,
                products: { create: data.productsID.map((prod) => ({
                        productId: prod.productId,
                        count: prod.count
                    })) }
            }, include: { products: true, user: true } });
    }
    findOrderById(id) {
        return this.prismaService.order.findUnique({ where: { id }, include: { products: true, user: true } });
    }
    updateOrder(id, data) {
        return this.prismaService.order.update({ where: { id }, data: data, include: { products: true, user: true } });
    }
    deleteOrder(id) {
        return this.prismaService.order.delete({ where: { id }, include: { products: true, user: true } });
    }
};
exports.OrderRepository = OrderRepository;
exports.OrderRepository = OrderRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderRepository);
//# sourceMappingURL=order.repository.js.map