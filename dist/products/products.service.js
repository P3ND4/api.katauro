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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const products_repository_1 = require("./products.repository");
const CatRepository_1 = require("./CatRepository");
let ProductsService = class ProductsService {
    productRepository;
    catRep;
    constructor(productRepository, catRep) {
        this.productRepository = productRepository;
        this.catRep = catRep;
    }
    create(createProductDto) {
        return this.productRepository.createProduct(createProductDto);
    }
    findAll() {
        return this.productRepository.findAllProducts();
    }
    async findPage(page) {
        const products = await this.productRepository.findAllProducts();
        return products.slice((page - 1) * 9, (page - 1) * 9 + 9);
    }
    async getPages() {
        const products = await this.productRepository.findAllProducts();
        return Math.ceil(products.length / 9);
    }
    findOne(id) {
        return this.productRepository.findProductById(id);
    }
    update(id, updateProductDto) {
        return this.productRepository.updateProduct(id, updateProductDto);
    }
    remove(id) {
        return this.productRepository.deleteProduct(id);
    }
    async getProductByCategory(name) {
        var products = await this.productRepository.findAllProducts();
        return products.filter((prod) => prod.category.nombre === name);
    }
    async getCatByName(name) {
        return (await this.catRep.findCategories()).filter((cat) => cat.nombre === name);
    }
    async getCats() {
        return this.catRep.findCategories();
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [products_repository_1.ProductRepository, CatRepository_1.catRepository])
], ProductsService);
//# sourceMappingURL=products.service.js.map