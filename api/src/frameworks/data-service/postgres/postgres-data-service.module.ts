import { Module } from '@nestjs/common';
import { PostgresDataService } from './postgres-data.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookmarkEntity, UserEntity } from './model';
import { ConfigModule } from '@nestjs/config';
import { IDataServices } from '../../../core';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      BookmarkEntity
    ]),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // from docker-compose
      autoLoadEntities: true,
      synchronize: true
    }),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: PostgresDataService
    }
  ],
  exports: [IDataServices]
})
export class PostgresDataServiceModule {}
