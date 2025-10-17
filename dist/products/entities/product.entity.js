"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typology = exports.Color = exports.Finish = exports.CatEntity = exports.Categories = exports.Variant = exports.Product = void 0;
class Product {
    id;
    name;
    categoryId;
    finish;
    description;
    subtitle;
    vector;
    category;
    variants;
    typology;
}
exports.Product = Product;
class Variant {
    id;
    variantName;
    colorId;
    price;
    stock;
    image;
    images;
    color;
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