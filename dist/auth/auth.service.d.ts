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
    getLoggedUser(token: string): Promise<any>;
    logout(token: string): Promise<{
        message: string;
    }>;
    sendCode(email: string): Promise<any>;
    verifyCode(email: string, code: string): Promise<string>;
    changePassword(email: string, newPassword: string): Promise<any>;
    private generateOTP;
    private generateResetToken;
}
