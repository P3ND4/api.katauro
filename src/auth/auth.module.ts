import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtAuthGuard } from '../shared/guards/auth.guard';
import { JwtStrategy } from '../shared/services/jwt/jwt.strategy';
import { UsersService } from 'src/users/users.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersRepository } from 'src/users/users.repository';
import { RevokedJwtService } from '../shared/services/jwt/revokedJwt.service';
import { MailService } from 'src/shared/services/mail/mail.service';
import { JwtResetStrategy } from 'src/shared/services/jwt/jwt-reset.strategy';

@Module({
  controllers: [AuthController],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Asegúrate de que las variables de entorno estén disponibles globalmente
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, JwtAuthGuard,
    UsersService, JwtStrategy, JwtResetStrategy,
    ConfigService, PrismaService, UsersRepository,
    RevokedJwtService, MailService],
})
export class AuthModule { }
