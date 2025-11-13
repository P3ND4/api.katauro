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
const product_entity_1 = require("./entities/product.entity");
const CatRepository_1 = require("./CatRepository");
let ProductsService = class ProductsService {
    productRepository;
    propRep;
    CatParser = [
        product_entity_1.Categories.footLumin,
        product_entity_1.Categories.lightBulb,
        product_entity_1.Categories.roofLumin,
        product_entity_1.Categories.tableLumin,
        product_entity_1.Categories.wallLumin
    ];
    constructor(productRepository, propRep) {
        this.productRepository = productRepository;
        this.propRep = propRep;
    }
    async create(createProductDto) {
        return this.productRepository.createProduct(createProductDto);
    }
    findAll() {
        return this.productRepository.findAllProducts();
    }
    async findPage(page) {
        const products = await this.productRepository.findAllProducts();
        return products.slice((page - 1) * 9, (page - 1) * 9 + 9);
    }
    async getPages(category) {
        const products = await this.productRepository.findAllProducts();
        const catList = category ? category.split('-') : null;
        const categories = catList ? catList.map((cat) => this.CatParser[+cat]) : null;
<<<<<<< HEAD
        return !categories ? Math.ceil(products.length / 9) : Math.ceil(products.filter((p) => p.category.nombre in categories).length / 9);
=======
        return !categories ? Math.ceil(products.length / 9) : Math.ceil(products.filter((p) => categories.includes(p.category.nombre)).length / 9);
>>>>>>> dev
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
    async getProductByCategory(name, page) {
        var products = await this.productRepository.findAllProducts();
        const names = name.split('-').map(n => this.CatParser[+n]);
<<<<<<< HEAD
        products = products.filter((prod) => prod.category.nombre in names);
=======
        products = products.filter((prod) => names.includes(prod.category.nombre));
>>>>>>> dev
        return page ? products.slice((page - 1) * 9, (page - 1) * 9 + 9) : products;
    }
    async getCatByName(name) {
        return (await this.propRep.findCategories()).filter((cat) => cat.nombre === name);
    }
    async getCats() {
        return this.propRep.findCategories();
    }
    getFinishes() {
        return this.propRep.findFinishes();
    }
    createFinish(data) {
        return this.propRep.addFinish(data);
    }
    deleteFinish(id) {
        return this.propRep.deleteFinish(id);
    }
    getColors() {
        return this.propRep.findColors();
    }
    createColor(data) {
        return this.propRep.addColor(data);
    }
    deleteColor(id) {
        return this.propRep.deleteColor(id);
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [products_repository_1.ProductRepository, CatRepository_1.propRepository])
], ProductsService);
//# sourceMappingURL=products.service.js.map