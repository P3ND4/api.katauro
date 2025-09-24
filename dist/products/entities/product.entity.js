"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatEntity = exports.Categories = exports.Variant = exports.Product = void 0;
class Product {
    id;
    name;
    categoryId;
    description;
    subtitle;
    vector;
    category;
    variants;
}
exports.Product = Product;
class Variant {
    id;
    variantName;
    color;
    price;
    stock;
    image;
    images;
}
exports.Variant = Variant;
var Categories;
(function (Categories) {
    Categories["tableLumin"] = "Luminarias de mesa";
    Categories["wallLumin"] = "Luminarias de pared";
    Categories["footLumin"] = "Luminarias de pie";
    Categories["roofLumin"] = "Luminarias de techo";
    Categories["lightBulb"] = "Bombillo";
    Categories["other"] = "Otras";
})(Categories || (exports.Categories = Categories = {}));
class CatEntity {
    nombre;
    id;
}
exports.CatEntity = CatEntity;
//# sourceMappingURL=product.entity.js.map