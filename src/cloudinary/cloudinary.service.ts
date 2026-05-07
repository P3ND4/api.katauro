import { Injectable, Logger } from '@nestjs/common';
import * as crypto from 'crypto';
import cloudinary from './cloudinary.config';
import { ResourceType } from 'cloudinary';

@Injectable()
export class CloudinaryService {

    private readonly logger = new Logger(CloudinaryService.name);

    constructor() {


    }

    async moveImage(publicId: string, url: string) {
        if (publicId.startsWith('katauro/temp/')) {
            const newPublicId = publicId.replace(/^katauro\/temp\//, 'katauro/production/');

            try {
                const res = await cloudinary.uploader.rename(publicId, newPublicId, {
                    overwrite: true
                });

                await cloudinary.uploader.explicit(res.public_id, {
                    type: 'upload',
                    asset_folder: 'katauro/production'
                });

                return {
                    link: res.secure_url.replace('/upload/', '/upload/q_auto,f_auto/'),
                    public_id: res.public_id
                };
            } catch (error: any) {
                if (error?.http_code === 404 || error?.error?.http_code === 404 || error?.message?.includes('not found')) {
                    this.logger.warn(`moveImage: recurso ya movido o no encontrado en temp: ${publicId}`);
                    return {
                        link: url.replace('/upload/', '/upload/q_auto,f_auto/'),
                        public_id: newPublicId
                    };
                }
                this.logger.error(`moveImage: error inesperado para ${publicId}`, error);
                throw error;
            }
        }

        return { link: url, public_id: publicId };
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

    async moveModel3D(publicId: string, url: string) {
        if (publicId.startsWith('katauro/temp/')) {
            const newPublicId = publicId.replace(/^katauro\/temp\//, 'katauro/production/');

            try {
                const res = await cloudinary.uploader.rename(publicId, newPublicId, {
                    overwrite: true,
                });

                await cloudinary.uploader.explicit(res.public_id, {
                    type: 'upload',
                    asset_folder: 'katauro/production',
                });

                return {
                    link: res.secure_url,
                    public_id: res.public_id
                };
            } catch (error: any) {
                if (error?.http_code === 404 || error?.error?.http_code === 404 || error?.message?.includes('not found')) {
                    this.logger.warn(`moveModel3D: recurso ya movido o no encontrado en temp: ${publicId}`);
                    return { link: url, public_id: newPublicId };
                }
                this.logger.error(`moveModel3D: error inesperado para ${publicId}`, error);
                throw error;
            }
        }

        return { link: url, public_id: publicId };
    }

    async deleteModel3D(publicId: string): Promise<any> {
        try {
            const result = await cloudinary.uploader.destroy(publicId, {
                invalidate: true,
                resource_type: 'raw',
            });
            this.logger.log(`Modelo 3D eliminado de Cloudinary: ${publicId} => ${JSON.stringify(result)}`);
            return result;
        } catch (error) {
            this.logger.error(`Error al eliminar modelo 3D de Cloudinary: ${publicId}`, error as any);
            throw error;
        }
    }
}


