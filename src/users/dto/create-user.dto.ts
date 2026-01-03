export class CreateUserDto {
    email: string;
    name: string;
    lastName: string
    password: string;
    image: string;
    phone: number;
    emailVerified?: boolean;
    emailVerificationCode?: string;
    emailVerificationExpires?: Date;
}
