import { Injectable } from '@nestjs/common';
import { CreateUserDto, IUser, UpdateUserDto } from '../../core';

@Injectable()
export class UserFactoryService {
  createNewUser(createUserDto: CreateUserDto) {
    return new IUser(createUserDto);
  }

  updateUser(updateUserDto: UpdateUserDto) {
    return new IUser(updateUserDto);
  }

}
