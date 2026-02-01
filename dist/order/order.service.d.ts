import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderRepository } from './order.repository';
import { OrderState } from './entities/order.entity';
import { SpecProductService } from 'src/products/spec-product/spec-product.service';
export declare class OrderService {
    private orderRepository;
    private variantService;
    constructor(orderRepository: OrderRepository, variantService: SpecProductService);
    stateParser: OrderState[];
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    findAll(option: {
        search?: string;
        state?: string;
        order?: string;
    }): Promise<Order[]>;
    findOne(id: string): Promise<any>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<Order>;
    remove(id: string): Promise<Order>;
}
