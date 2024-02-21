import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dto';
import { IUser } from '../model';
import { NotFoundException, UserAlreadyExistsException } from 'src/common';
import { userRepository, UserRepository } from 'src/core/repository/user.repository';
import * as bcrypt from 'bcrypt';

const PASSWORD_SALT = 10;

@Injectable()
export class UserService {
  constructor(
    @Inject('userRepository') private readonly repository: UserRepository
  ) { }

  public async findAll(): Promise<IUser[]> {
    return await this.repository.findAll()
  }

  public async getById(id: string): Promise<IUser> {
    return await this.repository.get(id)
  }

  public async create(createUserDto: CreateUserDto): Promise<IUser> {
    const exists: boolean = await this.emailExists(createUserDto.email);
    if (exists) {
      throw new UserAlreadyExistsException();
    }

    return this.repository.save({
      email: createUserDto.email.toLowerCase(),
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      password: this.hashPassword(createUserDto.password)
    } as unknown as IUser);
  }

  public async update(id: string, updateUserDto: UpdateUserDto): Promise<IUser> {
    const user = await this.repository.get(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return await this.repository.save({
      id: id,
      firstName: updateUserDto.firstName,
      lastName: updateUserDto.lastName
    } as IUser)
  }

  public async delete(id: string): Promise<void | boolean> {
    return this.repository.delete(id);
  }

  private async emailExists(email: string): Promise<boolean> {
    return !!(await this.repository.findByCondition({ email: email }));
  }

  private hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, PASSWORD_SALT);
  }

  private validatePassword(password: string, storedPasswordHash: string): Promise<boolean> {
    return bcrypt.compare(password, storedPasswordHash);
  }
}
