import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { UserEntity } from './user.entity';
import { IBookmark } from 'src/core';

@Entity('bookmark')
export class BookmarkEntity extends BaseEntity<BookmarkEntity> implements IBookmark {

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  link: string;

  @ManyToMany(() => UserEntity, user => user.bookmarks)
  users: UserEntity[];

}
