import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/services/prisma/prisma.service';
import { CreateDeliveryPriceDto } from '../dto/create-delivery-price.dto';
import { UpdateDeliveryPriceDto } from '../dto/update-delivery-price.dto';
import { DeliveryPrice } from '../entities/delivery-price.entity';

@Injectable()
export class DeliveryPriceRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(createDto: CreateDeliveryPriceDto): Promise<DeliveryPrice> {
        const deliveryPrice = await this.prisma.deliveryPrice.create({
            data: {
                province: createDto.province,
                municipality: createDto.municipality,
                price: createDto.price,
                active: createDto.active ?? true,
            },
        });
        return this.mapToEntity(deliveryPrice);
    }

    async findAll(): Promise<DeliveryPrice[]> {
        const deliveryPrices = await this.prisma.deliveryPrice.findMany({
            orderBy: [{ province: 'asc' }, { municipality: 'asc' }],
        });
        return deliveryPrices.map((dp) => this.mapToEntity(dp));
    }

    async findActive(): Promise<DeliveryPrice[]> {
        const deliveryPrices = await this.prisma.deliveryPrice.findMany({
            where: { active: true },
            orderBy: [{ province: 'asc' }, { municipality: 'asc' }],
        });
        return deliveryPrices.map((dp) => this.mapToEntity(dp));
    }

    async findById(id: string): Promise<DeliveryPrice | null> {
        const deliveryPrice = await this.prisma.deliveryPrice.findUnique({
            where: { id },
        });
        return deliveryPrice ? this.mapToEntity(deliveryPrice) : null;
    }

    async findByProvince(province: string): Promise<DeliveryPrice[]> {
        const deliveryPrices = await this.prisma.deliveryPrice.findMany({
            where: { province },
            orderBy: { municipality: 'asc' },
        });
        return deliveryPrices.map((dp) => this.mapToEntity(dp));
    }

    async findByProvinceMunicipality(province: string, municipality: string): Promise<DeliveryPrice | null> {
        const deliveryPrice = await this.prisma.deliveryPrice.findUnique({
            where: { province_municipality: { province, municipality } },
        });
        return deliveryPrice ? this.mapToEntity(deliveryPrice) : null;
    }

    async update(id: string, updateDto: UpdateDeliveryPriceDto): Promise<DeliveryPrice> {
        const deliveryPrice = await this.prisma.deliveryPrice.update({
            where: { id },
            data: {
                ...(updateDto.province !== undefined && { province: updateDto.province }),
                ...(updateDto.municipality !== undefined && { municipality: updateDto.municipality }),
                ...(updateDto.price !== undefined && { price: updateDto.price }),
                ...(updateDto.active !== undefined && { active: updateDto.active }),
            },
        });
        return this.mapToEntity(deliveryPrice);
    }

    async delete(id: string): Promise<boolean> {
        try {
            await this.prisma.deliveryPrice.delete({ where: { id } });
            return true;
        } catch {
            return false;
        }
    }

    private mapToEntity(data: any): DeliveryPrice {
        const entity = new DeliveryPrice();
        entity.id = data.id;
        entity.province = data.province;
        entity.municipality = data.municipality;
        entity.price = data.price;
        entity.active = data.active;
        entity.createdAt = data.createdAt;
        entity.updatedAt = data.updatedAt;
        return entity;
    }
}
