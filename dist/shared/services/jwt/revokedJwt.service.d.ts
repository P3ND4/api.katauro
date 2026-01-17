import { PrismaService } from "src/shared/services/prisma/prisma.service";
export declare class RevokedJwtService {
    private prisma;
    constructor(prisma: PrismaService);
    revokeToken(token: string, expiresAt: Date, tid: string): Promise<{
        id: string;
        token: string;
        expiresAt: Date;
        tid: string;
    }>;
    isTokenRevoked(tid: string): Promise<boolean>;
    cleanExpiredTokens(): Promise<void>;
}
