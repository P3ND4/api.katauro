import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersRepository } from './users.repository';
import { JwtStrategy } from 'src/shared/services/jwt/jwt.strategy';
import { JwtAuthGuard } from 'src/shared/guards/auth.guard';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtOwnerStrategy } from 'src/shared/services/jwt/jwt-owner.strategy';
import { OwnerGuard } from 'src/shared/guards/owner.guard';

@Module({
  controllers: [UsersController],
  imports: [
  ],
  providers: [ConfigService, UsersService, PrismaService, UsersRepository, JwtStrategy, JwtAuthGuard, JwtOwnerStrategy, OwnerGuard],
})
export class UsersModule { }
