import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CreateBookmarkDto, UpdateBookmarkDto } from 'src/core';
import { BookmarkService } from 'src/core/services/bookmark.service';

@Controller('bookmarks')
export class BookmarksController {
  constructor(
    private bookmarkService: BookmarkService
  ) {}

  @Get()
  async findAll() {
    return this.bookmarkService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.bookmarkService.getById(id)
  }

  @Post()
  async create(
    @Body() createBookmarkDto: CreateBookmarkDto
  ) {
    return this.bookmarkService.create(createBookmarkDto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateBookmarkDto: UpdateBookmarkDto
  ) {
    return this.bookmarkService.update(id, updateBookmarkDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.bookmarkService.delete(id);
  }
}
