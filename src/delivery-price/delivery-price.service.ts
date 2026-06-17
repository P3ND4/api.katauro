import { Injectable } from '@nestjs/common';
import { CreateDeliveryPriceDto } from './dto/create-delivery-price.dto';
import { UpdateDeliveryPriceDto } from './dto/update-delivery-price.dto';
import { DeliveryPriceRepository } from './repositories/delivery-price.repository';
import { DeliveryPrice } from './entities/delivery-price.entity';

@Injectable()
export class DeliveryPriceService {
    constructor(private readonly deliveryPriceRepository: DeliveryPriceRepository) {}

    async create(createDto: CreateDeliveryPriceDto): Promise<DeliveryPrice> {
        return await this.deliveryPriceRepository.create(createDto);
    }

    async findAll(): Promise<DeliveryPrice[]> {
        return await this.deliveryPriceRepository.findAll();
    }

    async findActive(): Promise<DeliveryPrice[]> {
        return await this.deliveryPriceRepository.findActive();
    }

    async findOne(id: string): Promise<DeliveryPrice | null> {
        return await this.deliveryPriceRepository.findById(id);
    }

    async findByProvince(province: string): Promise<DeliveryPrice[]> {
        return await this.deliveryPriceRepository.findByProvince(province);
    }

    async findByProvinceMunicipality(province: string, municipality: string): Promise<DeliveryPrice | null> {
        return await this.deliveryPriceRepository.findByProvinceMunicipality(province, municipality);
    }

    async update(id: string, updateDto: UpdateDeliveryPriceDto): Promise<DeliveryPrice> {
        return await this.deliveryPriceRepository.update(id, updateDto);
    }

    async remove(id: string): Promise<boolean> {
        return await this.deliveryPriceRepository.delete(id);
    }
}
