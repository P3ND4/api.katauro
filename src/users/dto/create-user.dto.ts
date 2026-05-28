export class CreateUserDto {
    email: string;
    name: string;
    lastName?: string;
    password?: string;
    image: string;
    publicId?: string;
    phone?: string;
    emailVerified?: boolean;
    emailVerificationCode?: string;
    emailVerificationExpires?: Date;
    googleId?: string;
    provider?: string;
}
