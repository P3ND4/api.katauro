"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryPriceModule = void 0;
const common_1 = require("@nestjs/common");
const delivery_price_service_1 = require("./delivery-price.service");
const delivery_price_controller_1 = require("./delivery-price.controller");
const delivery_price_repository_1 = require("./repositories/delivery-price.repository");
const admin_guard_1 = require("../shared/guards/admin/admin.guard");
const jwt_admin_strategy_1 = require("../shared/guards/admin/jwt-admin.strategy");
const shared_module_1 = require("../shared/shared.module");
let DeliveryPriceModule = class DeliveryPriceModule {
};
exports.DeliveryPriceModule = DeliveryPriceModule;
exports.DeliveryPriceModule = DeliveryPriceModule = __decorate([
    (0, common_1.Module)({
        controllers: [delivery_price_controller_1.DeliveryPriceController],
        providers: [delivery_price_service_1.DeliveryPriceService, delivery_price_repository_1.DeliveryPriceRepository, admin_guard_1.AdminGuard, jwt_admin_strategy_1.JwtAdminStrategy],
        imports: [shared_module_1.SharedModule],
    })
], DeliveryPriceModule);
//# sourceMappingURL=delivery-price.module.js.map