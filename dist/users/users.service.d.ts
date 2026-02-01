import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/shared/services/prisma/prisma.service';
import { UsersRepository } from './users.repository';
export declare class UsersService {
    private prismaService;
    private usersRepository;
    constructor(prismaService: PrismaService, usersRepository: UsersRepository);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<any>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<User>;
    findUserByEmail(email: string): Promise<any>;
}
