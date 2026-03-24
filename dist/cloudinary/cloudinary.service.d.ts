export declare class CloudinaryService {
    private readonly logger;
    constructor();
    moveImage(publicId: string, url: string): Promise<{
        link: any;
        public_id: any;
    }>;
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
