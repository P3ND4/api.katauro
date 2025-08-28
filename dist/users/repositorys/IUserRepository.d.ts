import { User } from "generated/prisma";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
export interface IUserRepository {
    findAllUsers(): Promise<User[]>;
    createUser(data: CreateUserDto): Promise<User>;
    findUserById(id: string): Promise<User | null>;
    updateUser(id: string, data: UpdateUserDto): Promise<User>;
    deleteUser(id: string): Promise<User>;
    findUserByEmail(email: string): Promise<User | null>;
}
