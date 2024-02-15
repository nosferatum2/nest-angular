import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataServicesModule } from './services/data-services/data-services.module';
import { UserUseCasesModule } from './use-cases/user/user-use-cases.module';
import { BookmarkUseCaseModule } from './use-cases/bookmark/bookmark-use-case.module';
import { BookmarksController, UserController } from './controllers';

@Module({
  imports: [
    DataServicesModule,
    UserUseCasesModule,
    BookmarkUseCaseModule
    // ConfigModule.forRoot({isGlobal: true}),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
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
  providers: [AppService],
})
export class AppModule {}

