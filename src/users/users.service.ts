import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService, private usersRepository: UsersRepository) { }


  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    createUserDto.image = 'https://res.cloudinary.com/dmhadvchw/image/upload/q_auto,f_auto/v1761761487/avatardefault_92824_sqhmie.png'
    return await this.usersRepository.createUser(createUserDto);
  };

  async findAll() {
    return this.usersRepository.findAllUsers();
  }

  async findOne(id: string) {
    return this.usersRepository.findUserById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    return this.usersRepository.updateUser(id, updateUserDto);
  }

  async remove(id: string) {
    return this.usersRepository.deleteUser(id);
  }

  async findUserByEmail(email: string) {
    return this.usersRepository.findUserByEmail(email);
  }
}

