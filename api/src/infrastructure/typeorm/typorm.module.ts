import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookmarkEntity, UserEntity } from './entity';
import { TypeormBookmarkRepository, TypeormUserRepository } from 'src/infrastructure/typeorm/repository';
import { userRepository } from 'src/core/repository/user.repository';
import { bookmarkRepository } from 'src/core/repository/bookmark.repository';
import * as process from 'process';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

const dbConnectionConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'db',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'user',
  password: process.env.DB_PASS || 'password',
  database: process.env.DB_NAME || 'database',
  autoLoadEntities: true,
  synchronize: true
}

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConnectionConfig),
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
}
