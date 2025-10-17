import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';


@Injectable()
export class CloudinaryService {

    async generateSignature() {
        const timestamp = Math.floor(Date.now() / 1000);
        const api_key = process.env.CLOUDINARY_API_KEY!;
        const api_secret = process.env.CLOUDINARY_API_SECRET!;
        const cloud_name = process.env.CLOUDINARY_CLOUD_NAME!;
        const upload_preset = 'katauroPresetSigned';
        const folder = 'katauro';

        // Firma = todos los parámetros que vas a enviar (orden alfabético)
        const signatureString = `folder=${folder}&timestamp=${timestamp}&upload_preset=${upload_preset}${api_secret}`;
        const signature = crypto.createHash('sha1').update(signatureString).digest('hex');

        return { timestamp, signature, api_key, cloud_name, upload_preset, folder };
    }
}


