import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginDto } from './dto/loginDto';
import type { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto, res: Response): Promise<void>;
    createCookie(access_token: string, res: Response, cookieName?: string, time?: number): void;
    register(createUserDto: CreateUserDto): Promise<any>;
    logout(req: any): Promise<{
        message: string;
    }>;
    sendCode(user: {
        email: string;
    }): Promise<void>;
    verifyCode(user: {
        email: string;
        code: string;
    }, res: Response): Promise<void>;
    changePassword(body: {
        newPassword: string;
        email: string;
    }): Promise<{
        email: string;
        name: string;
        lastName: string;
        password: string;
        image: string;
        phone: string;
        emailVerified: boolean;
        emailVerificationCode: string;
        emailVerificationExpires: Date;
        id: string;
        publicId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getMe(req: any): Promise<{
        email: string;
        name: string;
        lastName: string;
        image: string;
        phone: string;
        emailVerified: boolean;
        emailVerificationCode: string;
        emailVerificationExpires: Date;
        id: string;
        publicId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
