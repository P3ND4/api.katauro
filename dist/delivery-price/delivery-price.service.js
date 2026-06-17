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
exports.DeliveryPriceService = void 0;
const common_1 = require("@nestjs/common");
const delivery_price_repository_1 = require("./repositories/delivery-price.repository");
let DeliveryPriceService = class DeliveryPriceService {
    deliveryPriceRepository;
    constructor(deliveryPriceRepository) {
        this.deliveryPriceRepository = deliveryPriceRepository;
    }
    async create(createDto) {
        return await this.deliveryPriceRepository.create(createDto);
    }
    async findAll() {
        return await this.deliveryPriceRepository.findAll();
    }
    async findActive() {
        return await this.deliveryPriceRepository.findActive();
    }
    async findOne(id) {
        return await this.deliveryPriceRepository.findById(id);
    }
    async findByProvince(province) {
        return await this.deliveryPriceRepository.findByProvince(province);
    }
    async findByProvinceMunicipality(province, municipality) {
        return await this.deliveryPriceRepository.findByProvinceMunicipality(province, municipality);
    }
    async update(id, updateDto) {
        return await this.deliveryPriceRepository.update(id, updateDto);
    }
    async remove(id) {
        return await this.deliveryPriceRepository.delete(id);
    }
};
exports.DeliveryPriceService = DeliveryPriceService;
exports.DeliveryPriceService = DeliveryPriceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [delivery_price_repository_1.DeliveryPriceRepository])
], DeliveryPriceService);
//# sourceMappingURL=delivery-price.service.js.map