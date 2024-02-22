import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookmarksController, UserController } from './controllers';
import { ServiceModule } from 'src/core/services/service.module';

@Module({
  imports: [
    ServiceModule,
  ],
  controllers: [
    AppController,
    UserController,
    BookmarksController
  ],
  providers: [
    AppService,
  ],
  exports: [],
})
export class AppModule {}
