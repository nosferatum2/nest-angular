import { Column, Entity, ManyToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { UserEntity } from './user.entity';

@Entity('bookmark')
export class BookmarkEntity extends AbstractEntity<BookmarkEntity> {

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  link: string;

  @ManyToMany(() => UserEntity, user => user.bookmarks)
  users: UserEntity[];

}
