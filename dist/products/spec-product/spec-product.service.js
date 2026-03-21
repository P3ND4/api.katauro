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
exports.SpecProductService = void 0;
const common_1 = require("@nestjs/common");
const spec_product_repository_1 = require("./spec-product.repository");
const cloudinary_service_1 = require("../../cloudinary/cloudinary.service");
let SpecProductService = class SpecProductService {
    variantRep;
    cloudy;
    constructor(variantRep, cloudy) {
        this.variantRep = variantRep;
        this.cloudy = cloudy;
    }
    create(createSpecProductDTO) {
        return this.variantRep.createProduct(createSpecProductDTO);
    }
    async update(id, updateSpecProductDto) {
        const result = await this.variantRep.updateProduct(id, updateSpecProductDto);
        return result;
    }
    async delete(id) {
        const deleted = await this.variantRep.deleteProduct(id);
        if (deleted) {
            deleted.images?.forEach(async (img) => {
                this.cloudy;
            });
        }
    }
    findById(id) {
        return this.variantRep.findProductById(id);
    }
    findManyById(ids) {
        return this.variantRep.findManyById(ids);
    }
    findByGeneric(id) {
        return this.variantRep.findByGeneric(id);
    }
};
exports.SpecProductService = SpecProductService;
exports.SpecProductService = SpecProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [spec_product_repository_1.SpecProductRepository, cloudinary_service_1.CloudinaryService])
], SpecProductService);
//# sourceMappingURL=spec-product.service.js.map