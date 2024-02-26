import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { UserEntity } from '../entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/core/repository/user.repository';
import { IUser } from 'src/core';

@Injectable()
export class TypeormUserRepository implements UserRepository {

  private repository: Repository<UserEntity>;

  constructor(
    @InjectRepository(UserEntity)
      repository: Repository<UserEntity>
  ) {
    this.repository = repository;
  }

  public async findAll(): Promise<IUser[]> {
    return await this.repository.find()
  }

  public async findByCondition(filterCondition: any): Promise<IUser[]> {
    return await this.repository.find(filterCondition)
  }

  public async get(id: string): Promise<IUser> {
    return await this.repository.findOneBy({ id: id })
  }

  public async save(item: IUser): Promise<IUser> {
    return await this.repository.save(item)
  }

  public async delete(id: string): Promise<DeleteResult> {
    return await this.repository.delete(id)
  }
}
