import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dto';
import { IUser } from '../model';
import { UserAlreadyExistsException, UserNotFoundException } from 'src/common';
import { userRepository, UserRepository } from 'src/core/repository/user.repository';
import { hashPassword } from '../../common/utils/bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject(userRepository) private readonly repository: UserRepository,
  ) { }

  public async findAll(): Promise<IUser[]> {
    return await this.repository.findAll();
  }

  public async getById(id: string): Promise<IUser> {
    const user = await this.repository.get(id);

    if (!user) {
      throw new UserNotFoundException();
    }

    return user;
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
      password: await hashPassword(createUserDto.password)
    });
  }

  public async update(id: string, updateUserDto: UpdateUserDto): Promise<IUser> {
    const user = await this.repository.get(id);

    if (!user) {
      throw new UserNotFoundException();
    }

    return await this.repository.save({
      id: id,
      firstName: updateUserDto.firstName,
      lastName: updateUserDto.lastName
    });
  }

  public async delete(id: string): Promise<void | boolean> {
    const deleteResult = await this.repository.delete(id);

    if (!deleteResult.affected) {
      throw new UserNotFoundException();
    }

    return true;
  }

  private async emailExists(email: string): Promise<boolean> {
    const user = await this.repository.findByCondition({
      where: { email: email.toLowerCase() }
    });

    return !!user.length;
  }

}
