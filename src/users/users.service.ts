import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService, private usersRepository: UsersRepository) { }


  async create(createUserDto: CreateUserDto) {
    return await this.usersRepository.createUser(createUserDto);
  };

  async findAll() {
    return this.usersRepository.findAllUsers();
  }

  async findOne(id: string) {
    return this.usersRepository.findUserById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersRepository.updateUser(id, updateUserDto);
  }

  async remove(id: string) {
    return this.usersRepository.deleteUser(id);
  }

  async findUserByEmail(email: string) {
    return this.usersRepository.findUserByEmail(email);
  }
}

