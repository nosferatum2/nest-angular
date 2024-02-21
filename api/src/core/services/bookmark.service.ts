import { Inject, Injectable } from '@nestjs/common';
import { IBookmark } from '../model';
import { CreateBookmarkDto, UpdateBookmarkDto } from '../dto';
import { bookmarkRepository, BookmarkRepository } from 'src/core/repository/bookmark.repository';

@Injectable()
export class BookmarkService {

  constructor(
    @Inject(bookmarkRepository) private readonly repository: BookmarkRepository,
  ) {}

  public async findAll(): Promise<IBookmark[]> {
    return await this.repository.findAll();
  }

  public async get(id: string): Promise<IBookmark> {
    return await this.repository.get(id);
  }

  public async create(createBookmarkDto: CreateBookmarkDto): Promise<IBookmark> {
    return await this.repository.save({
      title: createBookmarkDto.title,
      description: createBookmarkDto.description
    } as unknown as IBookmark)
  }

  public async update(id: string, updateBookmarkDto: UpdateBookmarkDto): Promise<IBookmark> {
    return await this.repository.save({
      id: id,
      title: updateBookmarkDto.title,
      description: updateBookmarkDto.description
    })
  }

  public async delete(id: string): Promise<void | boolean> {
    return this.repository.delete(id);
  }

}
