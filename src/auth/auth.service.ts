import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/loginDto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService, private readonly jwtService: JwtService) { }
    async register(createUserDto: CreateUserDto): Promise<any> {

        const userExists = await this.userService.findUserByEmail(createUserDto.email).catch(()=>null);
        if (userExists) throw new BadRequestException('User already exists');
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        createUserDto.password = hashedPassword
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
        const payload = { email: user.email, sub: user.id };
        const accessToken = this.jwtService.sign(payload);
        return { access_token: accessToken };
    }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findUserByEmail(email);

        if (!user) return null;

        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid) return null;
        return user;
    }
}
