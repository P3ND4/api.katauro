"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSpecProductDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_sproduct_dto_1 = require("./create-sproduct.dto");
class UpdateSpecProductDto extends (0, mapped_types_1.PartialType)(create_sproduct_dto_1.CreateSpecProductDTO) {
}
exports.UpdateSpecProductDto = UpdateSpecProductDto;
//# sourceMappingURL=update-sproduct.dto.js.map