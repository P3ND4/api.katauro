import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersRepository } from './users.repository';
export declare class UsersService {
    private prismaService;
    private usersRepository;
    constructor(prismaService: PrismaService, usersRepository: UsersRepository);
    create(createUserDto: CreateUserDto): Promise<{
        email: string;
        name: string;
        password: string;
        image: string | null;
        id: string;
    }>;
    findAll(): Promise<{
        email: string;
        name: string;
        password: string;
        image: string | null;
        id: string;
    }[]>;
    findOne(id: string): Promise<{
        email: string;
        name: string;
        password: string;
        image: string | null;
        id: string;
    } | null>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        email: string;
        name: string;
        password: string;
        image: string | null;
        id: string;
    }>;
    remove(id: string): Promise<{
        email: string;
        name: string;
        password: string;
        image: string | null;
        id: string;
    }>;
    findUserByEmail(email: string): Promise<{
        email: string;
        name: string;
        password: string;
        image: string | null;
        id: string;
    } | null>;
}
