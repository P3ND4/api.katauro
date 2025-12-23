"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderState = exports.Order = void 0;
class Order {
    id;
    userId;
    delivery;
    state;
    price;
    delPrice;
    createdAt;
    user;
    address;
    province;
    city;
    note;
    name;
    lastName;
    email;
    phone;
    products;
}
exports.Order = Order;
var OrderState;
(function (OrderState) {
    OrderState["pending"] = "Pendiente";
    OrderState["completed"] = "Realizado";
    OrderState["canceled"] = "Cancelado";
})(OrderState || (exports.OrderState = OrderState = {}));
//# sourceMappingURL=order.entity.js.map