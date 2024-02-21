import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookmarksController, UserController } from './controllers';
import { ServiceModule } from 'src/core/services/service.module';

@Module({
  imports: [
    ServiceModule,
    // UserUseCasesModule,
    // BookmarkUseCaseModule
    // ConfigModule.forRoot({isGlobal: true}),
    // TypeOrmModule.forRoot({
    //   type: 'typeorm',
    //   url: process.env.DATABASE_URL, // from docker-compose
    //   autoLoadEntities: true,
    //   synchronize: true
    // }),
    // UserModule,
    // BookmarksModule,
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
