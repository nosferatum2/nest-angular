import { Column, Entity, JoinColumn, ManyToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { UserEntity } from './user.entity';
import { IBookmark } from 'src/core';

@Entity('bookmark')
export class BookmarkEntity extends BaseEntity<BookmarkEntity> implements IBookmark {

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  link: string;

  @ManyToMany(() => UserEntity, user => user.bookmarks)
  @JoinColumn()
  users: UserEntity[];

}
