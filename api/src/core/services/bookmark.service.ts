import { Inject, Injectable } from '@nestjs/common';
import { IBookmark } from '../model';
import { CreateBookmarkDto, UpdateBookmarkDto } from '../dto';
import { bookmarkRepository, BookmarkRepository } from 'src/core/repository/bookmark.repository';
import { BookmarkAlreadyExistsException, BookmarkNotFoundException } from '../../common';

@Injectable()
export class BookmarkService {

  constructor(
    @Inject(bookmarkRepository) private readonly repository: BookmarkRepository,
  ) {}

  public async findAll(): Promise<IBookmark[]> {
    return await this.repository.findAll();
  }

  public async getById(id: string): Promise<IBookmark> {
    const bookmark = await this.repository.get(id);

    if (!bookmark) {
      throw new BookmarkNotFoundException();
    }

    return bookmark;
  }

  public async create(createBookmarkDto: CreateBookmarkDto): Promise<IBookmark> {
    const exists: boolean = await this.bookmarkExists(createBookmarkDto.title);

    if (exists) {
      throw new BookmarkAlreadyExistsException();
    }

    return await this.repository.save({
      title: createBookmarkDto.title,
      description: createBookmarkDto.description,
      link: createBookmarkDto.link
    })
  }

  public async update(id: string, updateBookmarkDto: UpdateBookmarkDto): Promise<IBookmark> {
    const bookmark = await this.repository.get(id);

    if (!bookmark) {
      throw new BookmarkNotFoundException();
    }

    return await this.repository.save({
      id: id,
      title: updateBookmarkDto.title,
      description: updateBookmarkDto.description,
      link: updateBookmarkDto.link
    })
  }

  public async delete(id: string): Promise<void | boolean> {
    const deleteResult = await this.repository.delete(id);

    if (!deleteResult.affected) {
      throw new BookmarkNotFoundException();
    }

    return true;
  }

  private async bookmarkExists(title: string): Promise<boolean> {
    const bookmark = await this.repository.findByCondition({
      where: { title: title }
    });

    return !!bookmark.length
  }

}
