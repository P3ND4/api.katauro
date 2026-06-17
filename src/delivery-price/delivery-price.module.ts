import { Module } from '@nestjs/common';
import { DeliveryPriceService } from './delivery-price.service';
import { DeliveryPriceController } from './delivery-price.controller';
import { DeliveryPriceRepository } from './repositories/delivery-price.repository';
import { AdminGuard } from 'src/shared/guards/admin/admin.guard';
import { JwtAdminStrategy } from 'src/shared/guards/admin/jwt-admin.strategy';
import { SharedModule } from 'src/shared/shared.module';

@Module({
    controllers: [DeliveryPriceController],
    providers: [DeliveryPriceService, DeliveryPriceRepository, AdminGuard, JwtAdminStrategy],
    imports: [SharedModule],
})
export class DeliveryPriceModule {}
