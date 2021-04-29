import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/users.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<User> {
    return this.usersService.find({ id: id });
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() createUserDto: CreateUserDto) {
    this.usersService.update({ id: id }, createUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.usersService.delete({ id: id });
  }
}