import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtAuthGuard } from '../shared/guards/auth/auth.guard';
import { JwtStrategy } from '../shared/guards/auth/jwt.strategy';
import { UsersService } from 'src/users/users.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/shared/services/prisma/prisma.service';
import { UsersRepository } from 'src/users/users.repository';
import { RevokedJwtService } from '../shared/services/jwt/revokedJwt.service';
import { MailService } from 'src/shared/services/mail/mail.service';
import { JwtResetStrategy } from 'src/shared/guards/reset/jwt-reset.strategy';
import { UsersModule } from 'src/users/users.module';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { AuthGuard } from '@nestjs/passport';
import { OrderOwnerGuard, OwnerGuard } from 'src/shared/guards/ouwner/owner.guard';
import { JwtOrderOwnerStrategy, JwtOwnerStrategy } from 'src/shared/guards/ouwner/jwt-owner.strategy';
import { ResetGuard } from 'src/shared/guards/reset/reset.guard';
import { AdminGuard } from 'src/shared/guards/admin/admin.guard';
import { JwtAdminStrategy } from 'src/shared/guards/admin/jwt-admin.strategy';

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
    RevokedJwtService, MailService, CloudinaryService, OwnerGuard,
    JwtOwnerStrategy, OrderOwnerGuard, JwtOrderOwnerStrategy, AdminGuard,
    JwtAdminStrategy, ResetGuard, JwtResetStrategy],
  exports: [JwtAuthGuard, JwtStrategy, OwnerGuard,
    JwtOwnerStrategy, JwtResetStrategy, ResetGuard,
    AdminGuard, JwtAdminStrategy, OrderOwnerGuard,
    JwtOrderOwnerStrategy]
})
export class AuthModule { }
