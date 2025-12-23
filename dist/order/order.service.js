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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const order_repository_1 = require("./order.repository");
const order_entity_1 = require("./entities/order.entity");
let OrderService = class OrderService {
    orderRepository;
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    stateParser = [order_entity_1.OrderState.canceled, order_entity_1.OrderState.completed, order_entity_1.OrderState.pending];
    create(createOrderDto) {
        return this.orderRepository.createOrder(createOrderDto);
    }
    async findAll(option) {
        var orders = await this.orderRepository.findAllOrders();
        if (option.search) {
            orders = orders.filter(x => x.id.includes(option.search));
        }
        if (option.state) {
            const states = option.state.split('-').map(x => this.stateParser[x ?? 0]);
            orders = orders.filter(x => states.includes(x.state));
        }
        if (option.order) {
            orders = orders.sort((x, y) => option.order == '1' ? x.createdAt.getTime() - y.createdAt.getTime() : y.createdAt.getTime() - x.createdAt.getTime());
        }
        return orders;
    }
    findOne(id) {
        return this.orderRepository.findOrderById(id);
    }
    update(id, updateOrderDto) {
        return this.orderRepository.updateOrder(id, updateOrderDto);
    }
    remove(id) {
        return this.orderRepository.deleteOrder(id);
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [order_repository_1.OrderRepository])
], OrderService);
//# sourceMappingURL=order.service.js.map