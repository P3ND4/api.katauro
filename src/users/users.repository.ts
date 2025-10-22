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
    findUserByEmail(email: string): Promise<User | null> {
        return this.prismaService.user.findUniqueOrThrow({
            where: { email: email },
            include: {cart: {include: {product: true}}}
        });
    }
    findAllUsers(): Promise<User[]> {
        return this.prismaService.user.findMany({include:{cart: true}});
    }

    async createUser(data: CreateUserDto): Promise<User> {
        return await this.prismaService.user.create({data:data})
    }

    findUserById(id: string): Promise<User | null> {
        return this.prismaService.user.findUnique({
            where: { id },
            include: {cart: true}
        });
    }

    updateUser(id: string, data: UpdateUserDto): Promise<User> {
        return this.prismaService.user.update({
            where: { id },
            data: {
                name: data.name,
                email: data.email,
                password: data.password,
                cart: {create: data.updateCart?.map(variantId => ({productId: variantId}))},
                image: data.image,
            },
        });
    }

    deleteUser(id: string): Promise<User> {
        return this.prismaService.user.delete({
            where: { id },
        });
        
    }
}
