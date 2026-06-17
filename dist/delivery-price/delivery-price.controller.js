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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryPriceController = void 0;
const common_1 = require("@nestjs/common");
const delivery_price_service_1 = require("./delivery-price.service");
const create_delivery_price_dto_1 = require("./dto/create-delivery-price.dto");
const update_delivery_price_dto_1 = require("./dto/update-delivery-price.dto");
const admin_guard_1 = require("../shared/guards/admin/admin.guard");
let DeliveryPriceController = class DeliveryPriceController {
    deliveryPriceService;
    constructor(deliveryPriceService) {
        this.deliveryPriceService = deliveryPriceService;
    }
    create(createDeliveryPriceDto) {
        return this.deliveryPriceService.create(createDeliveryPriceDto);
    }
    findAll() {
        return this.deliveryPriceService.findAll();
    }
    findActive() {
        return this.deliveryPriceService.findActive();
    }
    findByProvince(province) {
        return this.deliveryPriceService.findByProvince(province);
    }
    findOne(id) {
        return this.deliveryPriceService.findOne(id);
    }
    update(id, updateDeliveryPriceDto) {
        return this.deliveryPriceService.update(id, updateDeliveryPriceDto);
    }
    remove(id) {
        return this.deliveryPriceService.remove(id);
    }
};
exports.DeliveryPriceController = DeliveryPriceController;
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_delivery_price_dto_1.CreateDeliveryPriceDto]),
    __metadata("design:returntype", void 0)
], DeliveryPriceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeliveryPriceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('active'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeliveryPriceController.prototype, "findActive", null);
__decorate([
    (0, common_1.Get)('province/:province'),
    __param(0, (0, common_1.Param)('province')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeliveryPriceController.prototype, "findByProvince", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeliveryPriceController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_delivery_price_dto_1.UpdateDeliveryPriceDto]),
    __metadata("design:returntype", void 0)
], DeliveryPriceController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeliveryPriceController.prototype, "remove", null);
exports.DeliveryPriceController = DeliveryPriceController = __decorate([
    (0, common_1.Controller)('delivery-prices'),
    __metadata("design:paramtypes", [delivery_price_service_1.DeliveryPriceService])
], DeliveryPriceController);
//# sourceMappingURL=delivery-price.controller.js.map