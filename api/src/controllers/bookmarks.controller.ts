import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookmarkUseCase } from '../use-cases/bookmark/bookmark.use-case';
import { CreateBookmarkDto, UpdateBookmarkDto } from '../core';


@Controller('bookmarks')
export class BookmarksController {
  constructor(
    private bookmarkUseCases: BookmarkUseCase
  ) {}

  @Get()
  async findAll() {
    return this.bookmarkUseCases.getAllBookmarks();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.bookmarkUseCases.getBookmarkById(id)
  }

  @Post()
  async create(@Body() createBookmarkDto: CreateBookmarkDto) {
    return this.bookmarkUseCases.createBookmark(createBookmarkDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBookmarkDto: UpdateBookmarkDto
  ) {
    return this.bookmarkUseCases.updateBookmark(id, updateBookmarkDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.bookmarkUseCases.deleteBookmark(id);
  }
}
