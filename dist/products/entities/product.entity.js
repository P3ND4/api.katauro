"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categories = exports.Product = void 0;
class Product {
    id;
    name;
    description;
    categorie;
    price;
    stock;
    image;
}
exports.Product = Product;
var Categories;
(function (Categories) {
    Categories["tableLumin"] = "Luminarias de mesa";
    Categories["wallLumin"] = "Luminarias de pared";
    Categories["footLumin"] = "Luminarias de pie";
    Categories["roofLumin"] = "Luminarias de techo";
    Categories["lightBulb"] = "Bombillo";
    Categories["other"] = "Otras";
})(Categories || (exports.Categories = Categories = {}));
//# sourceMappingURL=product.entity.js.map