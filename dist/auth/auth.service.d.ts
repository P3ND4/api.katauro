import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/loginDto';
import { RevokedJwtService } from './revokedJwt.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private readonly revokedJwtService;
    constructor(userService: UsersService, jwtService: JwtService, revokedJwtService: RevokedJwtService);
    register(createUserDto: CreateUserDto): Promise<any>;
    login(credentials: LoginDto): Promise<any>;
    validateUser(email: string, password: string): Promise<any>;
    getLoggedUser(token: string): Promise<{
        email: string;
        name: string;
        lastName: string;
        image: string;
        id: string;
    }>;
    logout(token: string): Promise<{
        message: string;
    }>;
}
