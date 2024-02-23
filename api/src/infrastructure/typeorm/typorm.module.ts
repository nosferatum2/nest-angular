import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookmarkEntity, UserEntity } from './entity';
import { ConfigModule } from '@nestjs/config';
import { TypeormBookmarkRepository, TypeormUserRepository } from 'src/infrastructure/typeorm/repository';
import { userRepository } from 'src/core/repository/user.repository';
import { bookmarkRepository } from 'src/core/repository/bookmark.repository';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // from docker-compose
      autoLoadEntities: true,
      synchronize: true
    }),
    TypeOrmModule.forFeature([
      UserEntity,
      BookmarkEntity
    ]),
  ],
  providers: [
    {
      provide: userRepository, // unique for each instance with Symbol() or use string value
      useClass: TypeormUserRepository
    },
    {
      provide: bookmarkRepository, // unique for each instance with Symbol() or use string value
      useClass: TypeormBookmarkRepository
    }
  ],
  exports: [
    bookmarkRepository,
    userRepository
  ]
})
export class TypeormModule {
  constructor() {
    console.log(' ================================ connecting to database... ===============================');
    console.log(process.env.DATABASE_URL);
  }

}
