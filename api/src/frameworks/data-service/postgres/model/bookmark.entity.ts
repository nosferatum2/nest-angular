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

  // @ManyToOne(
  //   () => UserEntity,
  //   user => user.bookmarks,
  //   {
  //     onDelete: 'CASCADE'
  //   }
  // )
  // user: UserEntity;

  @ManyToMany(() => UserEntity, user => user.bookmarks)
  users: UserEntity[];

}
