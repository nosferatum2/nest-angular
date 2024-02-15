import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { IBookmark, IDataServices, IGenericRepository, IUser } from '../../../core';
import { InjectRepository } from '@nestjs/typeorm';
import { BookmarkEntity, UserEntity } from './model';
import { Repository } from 'typeorm';
import { PostgresAbstractRepository } from './postgres-abstract-repository';

@Injectable()
export class PostgresDataService implements IDataServices, OnApplicationBootstrap {
  users: IGenericRepository<IUser>;
  bookmarks: IGenericRepository<IBookmark>;

  constructor(
    @InjectRepository(UserEntity)
    private UserRepository: Repository<UserEntity>,
    @InjectRepository(UserEntity)
    private BookmarkRepository: Repository<BookmarkEntity>,
  ) {}

  onApplicationBootstrap() {
    this.users = new PostgresAbstractRepository<UserEntity>(this.UserRepository);
    this.bookmarks = new PostgresAbstractRepository<BookmarkEntity>(this.BookmarkRepository);

  }
}
