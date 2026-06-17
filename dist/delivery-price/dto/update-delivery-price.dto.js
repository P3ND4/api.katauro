"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDeliveryPriceDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_delivery_price_dto_1 = require("./create-delivery-price.dto");
class UpdateDeliveryPriceDto extends (0, mapped_types_1.PartialType)(create_delivery_price_dto_1.CreateDeliveryPriceDto) {
}
exports.UpdateDeliveryPriceDto = UpdateDeliveryPriceDto;
//# sourceMappingURL=update-delivery-price.dto.js.map