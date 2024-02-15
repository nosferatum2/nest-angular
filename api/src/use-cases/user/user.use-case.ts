import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto, IDataServices, LoginUserDto, UpdateUserDto } from '../../core';
import { UserFactoryService } from './user-factory-service';
import * as bcrypt from 'bcrypt';

const PASSWORD_SALT = 10;

@Injectable()
export class UsersUseCases {
  constructor(
    private dataServices: IDataServices,
    private userFactoryService: UserFactoryService
  ) {}

  getAllUsers() {
    return this.dataServices.users.findAll();
  }

  getUserById(id: string) {
    return this.dataServices.users.findByCondition({ id: id });
  }

  async createUser(createUserDto: CreateUserDto) {
    try {
      const exists: boolean = await this.mailExists(createUserDto.email);
      if (!exists) {
        const newUser = this.userFactoryService.createNewUser(createUserDto);
        newUser.email.toLowerCase();
        newUser.password = await this.hashPassword(newUser.password);

        return this.dataServices.users.create(newUser);
      } else {
        throw new HttpException('User with that email already exists.', HttpStatus.CONFLICT);
      }
    } catch(e) {
      throw new HttpException(`${e.message}`, e.status);
    }

  }

  async updateUser(userId: string, updateUserDto: UpdateUserDto) {
    try {
      const foundUser = await this.dataServices.users.findByCondition({ id: userId });

      if (foundUser) {
        const user = this.userFactoryService.updateUser(updateUserDto);
        await this.dataServices.users.update(userId, user);

        return await this.dataServices.users.findByCondition({ id: userId });
      } else {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
    } catch (e) {
      throw new HttpException(`${e.message}`, e.status);
    }
  }

  async login(loginUserDto: LoginUserDto): Promise<string> {
    try {
      const foundUser = await this.dataServices.users.findByCondition({
        email: loginUserDto.email.toLowerCase()
      });

      if (foundUser) {
        const matches: boolean = await this.validatePassword(loginUserDto.password, foundUser.password);

        if (matches) {
          return 'Logged in';
        } else {
          throw new HttpException('Wrong credentials', HttpStatus.UNAUTHORIZED);
        }
      } else {
        throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
      }
    } catch (e) {
      throw new HttpException(`${e.message}`, e.status);
    }
  }

  deleteUser(userId: string) {
    return this.dataServices.users.delete(userId);
  }

  private async mailExists(email: string) {
    const user = await this.dataServices.users.findByCondition({ email: email });
    return !!user;
  }

  private async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, PASSWORD_SALT);
  }

  private async validatePassword(password: string, storedPasswordHash: string) {
    return await bcrypt.compare(password, storedPasswordHash);
  }
}

