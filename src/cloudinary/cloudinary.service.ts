import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';


@Injectable()
export class CloudinaryService {

    async generateSignature() {
        const timestamp = Math.round(new Date().getTime() / 1000);
        const uploadPreset = 'secure_preset'; // el nombre de tu preset configurado en Cloudinary

        // crear firma con tu API_SECRET
        const signature = crypto
            .createHash('sha1')
            .update(`timestamp=${timestamp}&upload_preset=${uploadPreset}${process.env.CLOUDINARY_API_SECRET}`)
            .digest('hex');

        return {
            timestamp,
            signature,
            upload_preset: uploadPreset,
            api_key: process.env.CLOUDINARY_API_KEY,
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        };
    }
}


