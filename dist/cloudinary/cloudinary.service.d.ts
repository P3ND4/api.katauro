export declare class CloudinaryService {
    private readonly logger;
    constructor();
    generateSignature(): Promise<{
        timestamp: number;
        signature: string;
        api_key: string;
        cloud_name: string;
        upload_preset: string;
        folder: string;
    }>;
    deleteImage(publicId: string): Promise<any>;
}
