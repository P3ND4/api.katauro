import { CloudinaryService } from './cloudinary.service';
export declare class CloudinaryController {
    private cs;
    constructor(cs: CloudinaryService);
    getSignature(): Promise<{
        timestamp: number;
        signature: string;
        api_key: string;
        cloud_name: string;
        upload_preset: string;
        folder: string;
    }>;
}
