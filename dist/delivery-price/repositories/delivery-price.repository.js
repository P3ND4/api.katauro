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
exports.DeliveryPriceRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/services/prisma/prisma.service");
const delivery_price_entity_1 = require("../entities/delivery-price.entity");
let DeliveryPriceRepository = class DeliveryPriceRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDto) {
        const deliveryPrice = await this.prisma.deliveryPrice.create({
            data: {
                province: createDto.province,
                municipality: createDto.municipality,
                price: createDto.price,
                active: createDto.active ?? true,
            },
        });
        return this.mapToEntity(deliveryPrice);
    }
    async findAll() {
        const deliveryPrices = await this.prisma.deliveryPrice.findMany({
            orderBy: [{ province: 'asc' }, { municipality: 'asc' }],
        });
        return deliveryPrices.map((dp) => this.mapToEntity(dp));
    }
    async findActive() {
        const deliveryPrices = await this.prisma.deliveryPrice.findMany({
            where: { active: true },
            orderBy: [{ province: 'asc' }, { municipality: 'asc' }],
        });
        return deliveryPrices.map((dp) => this.mapToEntity(dp));
    }
    async findById(id) {
        const deliveryPrice = await this.prisma.deliveryPrice.findUnique({
            where: { id },
        });
        return deliveryPrice ? this.mapToEntity(deliveryPrice) : null;
    }
    async findByProvince(province) {
        const deliveryPrices = await this.prisma.deliveryPrice.findMany({
            where: { province },
            orderBy: { municipality: 'asc' },
        });
        return deliveryPrices.map((dp) => this.mapToEntity(dp));
    }
    async findByProvinceMunicipality(province, municipality) {
        const deliveryPrice = await this.prisma.deliveryPrice.findUnique({
            where: { province_municipality: { province, municipality } },
        });
        return deliveryPrice ? this.mapToEntity(deliveryPrice) : null;
    }
    async update(id, updateDto) {
        const deliveryPrice = await this.prisma.deliveryPrice.update({
            where: { id },
            data: {
                ...(updateDto.province !== undefined && { province: updateDto.province }),
                ...(updateDto.municipality !== undefined && { municipality: updateDto.municipality }),
                ...(updateDto.price !== undefined && { price: updateDto.price }),
                ...(updateDto.active !== undefined && { active: updateDto.active }),
            },
        });
        return this.mapToEntity(deliveryPrice);
    }
    async delete(id) {
        try {
            await this.prisma.deliveryPrice.delete({ where: { id } });
            return true;
        }
        catch {
            return false;
        }
    }
    mapToEntity(data) {
        const entity = new delivery_price_entity_1.DeliveryPrice();
        entity.id = data.id;
        entity.province = data.province;
        entity.municipality = data.municipality;
        entity.price = data.price;
        entity.active = data.active;
        entity.createdAt = data.createdAt;
        entity.updatedAt = data.updatedAt;
        return entity;
    }
};
exports.DeliveryPriceRepository = DeliveryPriceRepository;
exports.DeliveryPriceRepository = DeliveryPriceRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DeliveryPriceRepository);
//# sourceMappingURL=delivery-price.repository.js.map