import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/shared/guards/auth/auth.guard';
import { OwnerGuard } from 'src/shared/guards/ouwner/owner.guard';
import { AdminGuard } from 'src/shared/guards/admin/admin.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @UseGuards(AdminGuard)
  @Get()
  async findAll(
    @Query('search') search?: string,
    @Query('order') order?: 'asc' | 'desc',
    @Query('page') page?: string,
  ) {
    const pageNum = page ? parseInt(page, 10) : undefined;
    const users = await this.usersService.findAll(search, order, pageNum);
    const total = await this.usersService.count(search);
    const pages = Math.ceil(total / 9);
    return { users, total, pages };
  }

  @UseGuards(AdminGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @UseGuards(OwnerGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @UseGuards(OwnerGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
