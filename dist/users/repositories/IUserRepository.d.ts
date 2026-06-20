import { User } from "generated/prisma";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
export interface IUserRepository {
    findAllUsers(search?: string, order?: 'asc' | 'desc', skip?: number, take?: number): Promise<User[]>;
    countUsers(search?: string): Promise<number>;
    createUser(data: CreateUserDto): Promise<User>;
    findUserById(id: string): Promise<User | null>;
    updateUser(id: string, data: UpdateUserDto): Promise<User>;
    deleteUser(id: string): Promise<User>;
    findUserByEmail(email: string): Promise<User | null>;
    findUserByGoogleId(googleId: string): Promise<User | null>;
}
