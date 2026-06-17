import { CreateDeliveryPriceDto } from './dto/create-delivery-price.dto';
import { UpdateDeliveryPriceDto } from './dto/update-delivery-price.dto';
import { DeliveryPriceRepository } from './repositories/delivery-price.repository';
import { DeliveryPrice } from './entities/delivery-price.entity';
export declare class DeliveryPriceService {
    private readonly deliveryPriceRepository;
    constructor(deliveryPriceRepository: DeliveryPriceRepository);
    create(createDto: CreateDeliveryPriceDto): Promise<DeliveryPrice>;
    findAll(): Promise<DeliveryPrice[]>;
    findActive(): Promise<DeliveryPrice[]>;
    findOne(id: string): Promise<DeliveryPrice | null>;
    findByProvince(province: string): Promise<DeliveryPrice[]>;
    findByProvinceMunicipality(province: string, municipality: string): Promise<DeliveryPrice | null>;
    update(id: string, updateDto: UpdateDeliveryPriceDto): Promise<DeliveryPrice>;
    remove(id: string): Promise<boolean>;
}
