import { DeliveryPriceService } from './delivery-price.service';
import { CreateDeliveryPriceDto } from './dto/create-delivery-price.dto';
import { UpdateDeliveryPriceDto } from './dto/update-delivery-price.dto';
export declare class DeliveryPriceController {
    private readonly deliveryPriceService;
    constructor(deliveryPriceService: DeliveryPriceService);
    create(createDeliveryPriceDto: CreateDeliveryPriceDto): Promise<import("./entities").DeliveryPrice>;
    findAll(): Promise<import("./entities").DeliveryPrice[]>;
    findActive(): Promise<import("./entities").DeliveryPrice[]>;
    findByProvince(province: string): Promise<import("./entities").DeliveryPrice[]>;
    findOne(id: string): Promise<import("./entities").DeliveryPrice | null>;
    update(id: string, updateDeliveryPriceDto: UpdateDeliveryPriceDto): Promise<import("./entities").DeliveryPrice>;
    remove(id: string): Promise<boolean>;
}
