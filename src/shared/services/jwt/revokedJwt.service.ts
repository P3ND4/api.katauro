import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { TokenBlacklist } from "generated/prisma";
import { PrismaService } from "src/shared/services/prisma/prisma.service";

@Injectable()
export class RevokedJwtService {

    constructor(private prisma: PrismaService) {  }

    async revokeToken(token: string, expiresAt: Date, tid: string) {
        return this.prisma.tokenBlacklist.create({
            data: {
                token,
                expiresAt,
                tid
            }
        });
    }

    async isTokenRevoked(tid: string): Promise<boolean> {
        var blacklist = (await this.prisma.tokenBlacklist.findMany()) as TokenBlacklist[];
        const record = blacklist.find(x=>x.tid === tid);
        
        //const record = await this.prisma.tokenBlacklist.findUnique({
        //    where: { token: token }
        //});
        return !!record;
    }

    @Cron('0 0 * * *') // Corre todos los días a medianoche
    async cleanExpiredTokens() {
        const now = new Date();
        await this.prisma.tokenBlacklist.deleteMany({
            where: {
                expiresAt: {
                    lt: now
                }
            }
        });
    }
}

// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Impvc2VjYXJsb3NwZW5kYXNyb2RyaWd1ZXpAZ21haWwuY29tIiwic3ViIjoiZGEzNzUzOTMtOTAzOS00YmUzLTlmMzUtOGRiZTNhYWFmNDNkIiwiaWF0IjoxNzU5MTg2MDY1LCJleHAiOj'
