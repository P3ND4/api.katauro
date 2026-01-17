export declare class CreateUserDto {
    email: string;
    name: string;
    lastName: string;
    password: string;
    image: string;
    phone: string;
    emailVerified?: boolean;
    emailVerificationCode?: string;
    emailVerificationExpires?: Date;
}
