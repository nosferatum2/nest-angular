import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { UsersUseCases } from '../use-cases/user/user.use-case';
import { CreateUserDto, LoginUserDto, UpdateUserDto } from '../core';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UserController {
  constructor(
    private userUseCases: UsersUseCases
  ) {}

  @Get()
  async findAll() {
    return this.userUseCases.getAllUsers();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userUseCases.getUserById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userUseCases.createUser(createUserDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.userUseCases.login(loginUserDto);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.userUseCases.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userUseCases.deleteUser(id);
  }
}
