import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/loginDto';
import { RevokedJwtService } from '../shared/services/jwt/revokedJwt.service';
import { MailService } from 'src/shared/services/mail/mail.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private readonly revokedJwtService;
    private readonly mailService;
    constructor(userService: UsersService, jwtService: JwtService, revokedJwtService: RevokedJwtService, mailService: MailService);
    register(createUserDto: CreateUserDto): Promise<any>;
    login(credentials: LoginDto): Promise<any>;
    private createToken;
    validateUser(email: string, password: string): Promise<any>;
    getLoggedUser(token: string): Promise<{
        name: string;
        id: string;
        email: string;
        lastName: string;
        phone: string;
        image: string;
        publicId: string | null;
        emailVerified: boolean;
        emailVerificationCode: string;
        emailVerificationExpires: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    logout(token: string): Promise<{
        message: string;
    }>;
    sendCode(email: string): Promise<void>;
    verifyCode(email: string, code: string): Promise<string>;
    changePassword(email: string, newPassword: string): Promise<{
        name: string;
        id: string;
        email: string;
        lastName: string;
        password: string;
        phone: string;
        image: string;
        publicId: string | null;
        emailVerified: boolean;
        emailVerificationCode: string;
        emailVerificationExpires: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    private generateOTP;
    private generateResetToken;
}
