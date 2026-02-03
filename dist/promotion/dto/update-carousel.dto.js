"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCarouselDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_carousel_dto_1 = require("./create-carousel.dto");
class UpdateCarouselDto extends (0, mapped_types_1.PartialType)(create_carousel_dto_1.CreateCarouselDto) {
}
exports.UpdateCarouselDto = UpdateCarouselDto;
//# sourceMappingURL=update-carousel.dto.js.map