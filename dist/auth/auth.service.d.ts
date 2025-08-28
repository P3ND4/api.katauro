import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/loginDto';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    register(createUserDto: CreateUserDto): Promise<any>;
    login(credentials: LoginDto): Promise<any>;
    validateUser(email: string, password: string): Promise<any>;
}
