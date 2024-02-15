import { Injectable } from '@nestjs/common';
import { BookmarkFactoryService } from './bookmark-factory-service';
import { CreateBookmarkDto, IDataServices } from '../../core';

@Injectable()
export class BookmarkUseCase {

  constructor(
    private dataServices: IDataServices,
    private bookmarkFactoryService: BookmarkFactoryService
  ) {}

  getAllBookmarks() {
    return this.dataServices.bookmarks.findAll();
  }

  getBookmarkById(id: string) {
    return this.dataServices.bookmarks.findByCondition({ id: id });
  }

  createBookmark(createBookmarkDto: CreateBookmarkDto) {
    const bookmark = this.bookmarkFactoryService.createNewBookmark(createBookmarkDto);
    return this.dataServices.bookmarks.create(bookmark);
  }

  updateBookmark(id: string, updateBookmarkDto: CreateBookmarkDto) {
    const bookmark = this.bookmarkFactoryService.updateBookmark(updateBookmarkDto);
    return this.dataServices.bookmarks.update(id, bookmark);
  }

  deleteBookmark(id: string) {
    return this.dataServices.bookmarks.delete(id);
  }

}
