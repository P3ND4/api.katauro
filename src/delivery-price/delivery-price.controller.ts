import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
} from '@nestjs/common';
import { DeliveryPriceService } from './delivery-price.service';
import { CreateDeliveryPriceDto } from './dto/create-delivery-price.dto';
import { UpdateDeliveryPriceDto } from './dto/update-delivery-price.dto';
import { AdminGuard } from 'src/shared/guards/admin/admin.guard';

@Controller('delivery-prices')
export class DeliveryPriceController {
    constructor(private readonly deliveryPriceService: DeliveryPriceService) {}

    @UseGuards(AdminGuard)
    @Post()
    create(@Body() createDeliveryPriceDto: CreateDeliveryPriceDto) {
        return this.deliveryPriceService.create(createDeliveryPriceDto);
    }

    @Get()
    findAll() {
        return this.deliveryPriceService.findAll();
    }

    @Get('active')
    findActive() {
        return this.deliveryPriceService.findActive();
    }

    @Get('province/:province')
    findByProvince(@Param('province') province: string) {
        return this.deliveryPriceService.findByProvince(province);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.deliveryPriceService.findOne(id);
    }

    @UseGuards(AdminGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateDeliveryPriceDto: UpdateDeliveryPriceDto) {
        return this.deliveryPriceService.update(id, updateDeliveryPriceDto);
    }

    @UseGuards(AdminGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.deliveryPriceService.remove(id);
    }
}
