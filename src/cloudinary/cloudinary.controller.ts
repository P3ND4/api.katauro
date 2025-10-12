import { Controller, Get } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';

@Controller('cloudinary')
export class CloudinaryController {
    constructor(private cs: CloudinaryService) { }
    
    
    @Get('signature')
    getSignature() {
        return this.cs.generateSignature();
    }

}
