import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookmarksController, UserController } from './controllers';
import { ServiceModule } from 'src/core/services/service.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../.env.compose',
      isGlobal: true
    }),
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
