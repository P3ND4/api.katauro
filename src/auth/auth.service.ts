import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/loginDto';
import { RevokedJwtService } from './revokedJwt.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService, private readonly jwtService: JwtService, private readonly revokedJwtService: RevokedJwtService) { }
    async register(createUserDto: CreateUserDto): Promise<any> {

        const userExists = await this.userService.findUserByEmail(createUserDto.email).catch(() => null);
        if (userExists) throw new BadRequestException('User already exists');
        return this.userService.create(createUserDto);
    }

    async login(credentials: LoginDto): Promise<any> {
        const { email, password } = credentials;
        const user = await this.userService.findUserByEmail(email);
        if (!user) {
            throw new BadRequestException('User not found');
        }
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new UnauthorizedException('Invalid credentials');
        }
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

}
