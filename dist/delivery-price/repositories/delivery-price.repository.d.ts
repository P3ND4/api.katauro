import { PrismaService } from '../../shared/services/prisma/prisma.service';
import { CreateDeliveryPriceDto } from '../dto/create-delivery-price.dto';
import { UpdateDeliveryPriceDto } from '../dto/update-delivery-price.dto';
import { DeliveryPrice } from '../entities/delivery-price.entity';
export declare class DeliveryPriceRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createDto: CreateDeliveryPriceDto): Promise<DeliveryPrice>;
    findAll(): Promise<DeliveryPrice[]>;
    findActive(): Promise<DeliveryPrice[]>;
    findById(id: string): Promise<DeliveryPrice | null>;
    findByProvince(province: string): Promise<DeliveryPrice[]>;
    findByProvinceMunicipality(province: string, municipality: string): Promise<DeliveryPrice | null>;
    update(id: string, updateDto: UpdateDeliveryPriceDto): Promise<DeliveryPrice>;
    delete(id: string): Promise<boolean>;
    private mapToEntity;
}
