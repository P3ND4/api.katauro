import { Injectable } from "@nestjs/common";
import { TokenBlacklist } from "generated/prisma";
import { PrismaService } from "src/prisma/prisma.service";

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
}

// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Impvc2VjYXJsb3NwZW5kYXNyb2RyaWd1ZXpAZ21haWwuY29tIiwic3ViIjoiZGEzNzUzOTMtOTAzOS00YmUzLTlmMzUtOGRiZTNhYWFmNDNkIiwiaWF0IjoxNzU5MTg2MDY1LCJleHAiOj'
