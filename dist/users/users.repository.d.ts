import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { IUserRepository } from "./repositorys/IUserRepository";
import { User } from "generated/prisma";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersRepository implements IUserRepository {
    private prismaService;
    constructor(prismaService: PrismaService);
    findUserByEmail(email: string): Promise<User | null>;
    findAllUsers(): Promise<User[]>;
    createUser(data: CreateUserDto): Promise<User>;
    findUserById(id: string): Promise<User | null>;
    updateUser(id: string, data: UpdateUserDto): Promise<User>;
    deleteUser(id: string): Promise<User>;
}
