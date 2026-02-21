"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typology = exports.Color = exports.Finish = exports.CatEntity = exports.Categories = exports.FinishForProduct = exports.Variant = exports.Product = void 0;
class Product {
    id;
    name;
    categoryId;
    finish;
    description;
    subtitle;
    vector;
    vPublicId;
    category;
    variants;
    typology;
}
exports.Product = Product;
class Variant {
    id;
    colorId;
    price;
    stock;
    image;
    images;
    color;
    genericId;
    genericProd;
    promotions;
}
exports.Variant = Variant;
class FinishForProduct {
    productId;
    finishId;
}
exports.FinishForProduct = FinishForProduct;
var Categories;
(function (Categories) {
    Categories["tableLumin"] = "Luminarias de mesa";
    Categories["wallLumin"] = "Luminarias de pared";
    Categories["footLumin"] = "Luminarias de pie";
    Categories["roofLumin"] = "Luminarias de techo";
    Categories["lightBulb"] = "Accesorios";
    Categories["other"] = "Otras";
})(Categories || (exports.Categories = Categories = {}));
class CatEntity {
    nombre;
    id;
}
exports.CatEntity = CatEntity;
class Finish {
    id;
    text;
    image;
}
exports.Finish = Finish;
class Color {
    id;
    name;
    image;
}
exports.Color = Color;
var Typology;
(function (Typology) {
    Typology["simple"] = "Simple";
    Typology["variant"] = "Variante";
})(Typology || (exports.Typology = Typology = {}));
//# sourceMappingURL=product.entity.js.map