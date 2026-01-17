import { BadRequestException, HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { randomInt } from 'crypto';
import { LoginDto } from './dto/loginDto';
import { RevokedJwtService } from '../shared/services/jwt/revokedJwt.service';
import { MailService } from 'src/shared/services/mail/mail.service';
import { User } from 'src/users/entities/user.entity';


@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService, private readonly jwtService: JwtService, private readonly revokedJwtService: RevokedJwtService,
        private readonly mailService: MailService
    ) { }
    async register(createUserDto: CreateUserDto): Promise<any> {
        return this.userService.create(createUserDto);
    }

    async login(credentials: LoginDto): Promise<any> {
        const { email, password } = credentials;
        const user = await this.userService.findUserByEmail(email);
        if (!user) {
            throw new UnauthorizedException('No existe usuario con ese email');
        }
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new UnauthorizedException('Contraseña incorrecta');
        }
        return this.createToken(user);
    }

    private createToken(user: User) {
        const payload = { email: user.email, sub: user.id, tid: crypto.randomUUID() };
        const accessToken = this.jwtService.sign(payload, { expiresIn: '72h' });
        return { access_token: accessToken };
    }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findUserByEmail(email);

        if (!user) return null;

        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid) return null;
        return user;
    }
    // auth.service.ts
    async getLoggedUser(token: string) {
        if (!token) throw new UnauthorizedException('Not logged in');

        try {
            const payload = this.jwtService.verify(token, { secret: process.env.JWT_SECRET });
            if (await this.revokedJwtService.isTokenRevoked(payload.tid)) throw new UnauthorizedException('Not logged in');
            const user = await this.userService.findOne(payload.sub);
            if (!user) throw new UnauthorizedException();

            const { password, ...userSafe } = user;
            return userSafe;
        } catch (err) {
            throw err;
        }
    }

    async logout(token: string) {
        if (!token || await this.revokedJwtService.isTokenRevoked(token)) throw new UnauthorizedException('Not logged in');


        try {
            const payload = this.jwtService.verify(token, { secret: process.env.JWT_SECRET });
            const expTimestamp = payload.exp;
            const expirationDate = new Date(expTimestamp * 1000);

            await this.revokedJwtService.revokeToken(token, expirationDate, payload.tid);
        } catch (err) {
            throw err;
        }
        return { message: 'Logout successful' };
    }

    async sendCode(email: string) {
        const user = await this.userService.findUserByEmail(email);
        if (!user) throw new BadRequestException('User not found');
        // Lógica para generar y enviar el código de verificación por correo electrónico
        const code = this.generateOTP();
        const expires = new Date(Date.now() + 5 * 60 * 1000); // 5 min
        await this.userService.update(user.id, {
            emailVerificationCode: code,
            emailVerificationExpires: expires
        });
        return this.mailService.sendVerification(user.email, code);
    }

    async verifyCode(email: string, code: string) {
        const user = await this.userService.findUserByEmail(email);
        if (!user) throw new BadRequestException('User not found');

        if (!user.emailVerificationCode || !user.emailVerificationExpires)
            throw new BadRequestException('No hay código pendiente');

        if (user.emailVerificationExpires < new Date())
            throw new BadRequestException('Código expirado');

        if (user.emailVerificationCode !== code)
            throw new BadRequestException('Código incorrecto');

        await this.userService.update(user.id,
            {
                emailVerified: true,
                emailVerificationCode: undefined,
                emailVerificationExpires: undefined,
            }
        );

        return this.generateResetToken(user.id);

    }

    async changePassword(email: string, newPassword: string) {
        const user = await this.userService.findUserByEmail(email);
        if (!user) throw new BadRequestException('User not found');
        return this.userService.update(user.id, { password: newPassword });
    }

    private generateOTP(): string {
        return randomInt(100000, 999999).toString(); // 6 dígitos
    }

    private generateResetToken(userId: string) {
        const payload = {
            sub: userId,
            purpose: 'reset-password',
        };

        return this.jwtService.sign(payload, {
            expiresIn: '10m', // 5–15 min ideal
        });
    }
}
