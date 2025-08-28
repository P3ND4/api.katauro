import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
}
