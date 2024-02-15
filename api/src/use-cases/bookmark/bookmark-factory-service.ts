import { Injectable } from '@nestjs/common';
import { CreateBookmarkDto, IBookmark, UpdateBookmarkDto } from '../../core';

@Injectable()
export class BookmarkFactoryService {
  createNewBookmark(createBookmarkDto: CreateBookmarkDto) {
    return new IBookmark(createBookmarkDto);
  }

  updateBookmark(updateBookmarkDto: UpdateBookmarkDto) {
    return new IBookmark(updateBookmarkDto);
  }
}
