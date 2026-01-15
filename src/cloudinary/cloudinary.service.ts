import { Injectable, Logger } from '@nestjs/common';
import * as crypto from 'crypto';
import cloudinary from './cloudinary.config';
import { ResourceType } from 'cloudinary';

@Injectable()
export class CloudinaryService {

    private readonly logger = new Logger(CloudinaryService.name);

    constructor() {


    }


    async generateSignature() {
        const timestamp = Math.floor(Date.now() / 1000);
        const api_key = process.env.CLOUDINARY_API_KEY!;
        const api_secret = process.env.CLOUDINARY_API_SECRET!;
        const cloud_name = process.env.CLOUDINARY_CLOUD_NAME!;
        const upload_preset = 'katauroPresetSigned';
        const folder = 'temp';

        // Firma = todos los parámetros que vas a enviar (orden alfabético)
        const signatureString = `folder=${folder}&timestamp=${timestamp}&upload_preset=${upload_preset}${api_secret}`;
        const signature = crypto.createHash('sha1').update(signatureString).digest('hex');

        return { timestamp, signature, api_key, cloud_name, upload_preset, folder };
    }

    async deleteImage(publicId: string): Promise<any> {
        try {
            const result = await cloudinary.uploader.destroy(publicId, {
                invalidate: true,
                resource_type: 'image',
            });
            this.logger.log(`Imagen eliminada de Cloudinary: ${publicId} => ${JSON.stringify(result)}`);
            return result;
        } catch (error) {
            this.logger.error(`Error al eliminar imagen de Cloudinary: ${publicId}`, error as any);
            throw error;
        }
    }
}


