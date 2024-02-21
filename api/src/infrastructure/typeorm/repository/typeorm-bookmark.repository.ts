import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BookmarkEntity } from '../entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BookmarkRepository } from 'src/core/repository/bookmark.repository';
import { IBookmark } from 'src/core';

@Injectable()
export class TypeormBookmarkRepository implements BookmarkRepository {

  private repository: Repository<BookmarkEntity>;

  constructor(
    @InjectRepository(BookmarkEntity)
      repository: Repository<BookmarkEntity>
  ) {
    this.repository = repository;
  }

  public async findAll(): Promise<IBookmark[]> {
    return await this.repository.find();
  }

  public async findByCondition(filterCondition: any): Promise<IBookmark[]> {
    return await this.repository.findBy(filterCondition);
  }

  public async get(id: string): Promise<IBookmark> {
    return await this.repository.findOneBy({ id: id })
  }

  public async save(item: IBookmark): Promise<IBookmark> {
    return await this.repository.save(item)
  }

  public async delete(id: string): Promise<void> {
    return await this.repository.delete(id).then()
  }
}
