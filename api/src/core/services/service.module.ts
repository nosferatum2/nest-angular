import { Module } from '@nestjs/common';
import { TypeormModule } from 'src/infrastructure/typeorm/typorm.module';
import { UserService } from './user.service';
import { BookmarkService } from './bookmark.service';

@Module({
  imports: [
    TypeormModule,
  ],
  providers: [
    UserService,
    BookmarkService
  ],
  exports: [
    UserService,
    BookmarkService,
  ],
})
export class ServiceModule {}
