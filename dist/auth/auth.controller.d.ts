import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginDto } from './dto/loginDto';
import type { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto, res: Response): Promise<void>;
    register(createUserDto: CreateUserDto): Promise<any>;
    logout(res: Response): {
        message: string;
    };
    getMe(req: any): Promise<{
        email: string;
        name: string;
        lastName: string;
        image: string | null;
        id: string;
    }>;
}
