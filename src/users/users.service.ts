import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/shared/services/prisma/prisma.service';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService, private usersRepository: UsersRepository, private cloudyServ: CloudinaryService) { }


  async create(createUserDto: CreateUserDto) {
    if (createUserDto.password) createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    const defaultImage = 'https://res.cloudinary.com/dmhadvchw/image/upload/q_auto,f_auto/v1778375147/Captura_de_pantalla_2026-05-09_210500_mxi00l.png'
    createUserDto.image = defaultImage;
    return await this.usersRepository.createUser(createUserDto);
  };

  async findAll(search?: string, order?: 'asc' | 'desc', page?: number) {
    const pageSize = 9;
    const skip = page ? (page - 1) * pageSize : undefined;
    const take = page ? pageSize : undefined;
    return this.usersRepository.findAllUsers(search, order, skip, take);
  }

  async count(search?: string) {
    return this.usersRepository.countUsers(search);
  }

  async findOne(id: string) {
    return this.usersRepository.findUserById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    let cloudyUpdate = updateUserDto.publicId && updateUserDto.image ? await this.cloudyServ.moveImage(updateUserDto.publicId, updateUserDto.image) : { link: updateUserDto.image, public_id: undefined };
    [updateUserDto.image, updateUserDto.publicId] = [cloudyUpdate.link, cloudyUpdate.public_id]

    if (updateUserDto.password) updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    return this.usersRepository.updateUser(id, updateUserDto);
  }

  async remove(id: string) {
    return this.usersRepository.deleteUser(id);
  }

  async findUserByEmail(email: string) {
    return this.usersRepository.findUserByEmail(email);
  }

  async findOrCreateGoogleUser(googleId: string, email: string, name: string, lastName: string, image: string) {
    let user = await this.usersRepository.findUserByGoogleId(googleId);
    if (!user) {
      user = await this.usersRepository.findUserByEmail(email);
      if (user) {
        user = await this.usersRepository.updateUser(user.id, { googleId, provider: 'google' });
      } else {
        user = await this.usersRepository.createUser({
          email,
          name,
          lastName: lastName || '',
          image: image || '',
          googleId,
          provider: 'google',
        });
      }
    }
    return user;
  }
}

