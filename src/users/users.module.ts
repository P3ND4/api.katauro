import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersRepository } from './users.repository';
import { JwtStrategy } from 'src/shared/services/jwt/jwt.strategy';
import { JwtAuthGuard } from 'src/shared/guards/auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [UsersController],
  imports: [
  ],
  providers: [ConfigService, UsersService, PrismaService, UsersRepository, JwtStrategy, JwtAuthGuard],
})
export class UsersModule { }
