import { PrismaService } from "src/shared/services/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { IUserRepository } from "./repositories/IUserRepository";
import { User } from "generated/prisma";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Injectable } from "@nestjs/common";


@Injectable()
export class UsersRepository implements IUserRepository {
    constructor(private prismaService: PrismaService) {
    }
    findUserByEmail(email: string): Promise<User | null> {
        return this.prismaService.user.findUnique({
            where: { email: email },
            include: {
                cart: {
                    include: {
                        product: {
                            include: {
                                images: true, color: true, genericProd: {
                                    include: {
                                        finish: true, details: true, category: true
                                    }
                                }, promotions: { include: { promotion: true } }

                            }
                        }
                    }
                }
            }
        });
    }
    findAllUsers(search?: string, order?: 'asc' | 'desc', skip?: number, take?: number): Promise<User[]> {
        const where = search
            ? {
                OR: [
                    { name: { contains: search } },
                    { lastName: { contains: search } },
                    { email: { contains: search } },
                    { phone: { contains: search } },
                ]
            }
            : undefined;

        return this.prismaService.user.findMany({
            where,
            orderBy: { createdAt: order || 'desc' },
            skip,
            take,
            include: {
                cart: {
                    include: {
                        product: {
                            include: {
                                images: true, color: true, genericProd: {
                                    include: {
                                        finish: true, details: true, category: true
                                    }
                                }
                            }
                        }
                    }
                },
                orders: true
            }
        });
    }

    countUsers(search?: string): Promise<number> {
        const where = search
            ? {
                OR: [
                    { name: { contains: search } },
                    { lastName: { contains: search } },
                    { email: { contains: search } },
                    { phone: { contains: search } },
                ]
            }
            : undefined;
        return this.prismaService.user.count({ where });
    }

    async createUser(data: CreateUserDto): Promise<User> {
        return await this.prismaService.user.create({ data: data })
    }

    findUserById(id: string): Promise<User | null> {
        return this.prismaService.user.findUnique({
            where: { id },
            include: {
                cart: {
                    include: {
                        product: {
                            include: {
                                images: true, color: true, genericProd: {
                                    include: {
                                        finish: true, details: true, category: true
                                    }
                                }, promotions: { include: { promotion: true } }
                            }
                        }
                    }
                },
                orders: {
                    include: {
                        products: true
                    }
                }
            }
        });
    }

    updateUser(id: string, data: UpdateUserDto): Promise<User> {
        return this.prismaService.user.update({
            where: { id },
            data: {
                name: data.name,
                email: data.email,
                lastName: data.lastName,
                password: data.password,
                publicId: data.publicId,
                phone: data.phone,
                googleId: data.googleId,
                provider: data.provider,
                cart: { create: data.updateCart?.map(variantId => ({ productId: variantId })), delete: data.deleteFromCArt?.map(prod => ({ userId_productId: { productId: prod, userId: id } })) },
                image: data.image,
                emailVerificationCode: data.emailVerificationCode,
                emailVerificationExpires: data.emailVerificationExpires,
                emailVerified: data.emailVerified,

            },
        });
    }

    deleteUser(id: string): Promise<User> {
        return this.prismaService.user.delete({
            where: { id },
        });

    }

    findUserByGoogleId(googleId: string): Promise<User | null> {
        return this.prismaService.user.findUnique({
            where: { googleId },
        });
    }
}
