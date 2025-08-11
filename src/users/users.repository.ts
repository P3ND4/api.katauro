import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { IUserRepository } from "./repositorys/IUserRepository";
import { User } from "generated/prisma";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Injectable } from "@nestjs/common";


@Injectable()
export class UsersRepository implements IUserRepository {
    constructor(private prismaService: PrismaService) {
     }
    findAllUsers(): Promise<User[]> {
        return this.prismaService.user.findMany();
    }

    async createUser(data: CreateUserDto): Promise<User> {
        return await this.prismaService.user.create({data:data})
    }

    findUserById(id: string): Promise<User | null> {
        return this.prismaService.user.findUnique({
            where: { id },
        });
    }

    updateUser(id: string, data: UpdateUserDto): Promise<User> {
        return this.prismaService.user.update({
            where: { id },
            data,
        });
    }

    deleteUser(id: string): Promise<User> {
        return this.prismaService.user.delete({
            where: { id },
        });
        
    }
}
