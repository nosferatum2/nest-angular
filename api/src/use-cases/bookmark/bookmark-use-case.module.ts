import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { BookmarkFactoryService } from './bookmark-factory-service';
import { BookmarkUseCase } from './bookmark.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [BookmarkFactoryService, BookmarkUseCase],
  exports: [BookmarkFactoryService, BookmarkUseCase],
})
export class BookmarkUseCaseModule {}
