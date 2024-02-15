import { Column, Entity, ManyToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
import { AbstractEntity } from './abstract.entity';
import { BookmarkEntity } from './bookmark.entity';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

// db model
@Entity('user')
export class UserEntity extends AbstractEntity<UserEntity> {

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Exclude({ toPlainOnly: true })
  @Column()
  password: string;

  // @Column({
  //   type: 'set',
  //   enum: UserRole,
  //   default: [UserRole.GUEST],
  // })
  // roles: UserRole[]

  // @Exclude()
  // @Column(
  //   'text',
  //   {
  //     unique: true,
  //     nullable: true
  //   }
  // )
  // hash: string | null;

  // @OneToMany(
  //   () => BookmarkEntity,
  //   bookmark => bookmark.user,
  //   { cascade: true }
  // )
  // bookmarks: BookmarkEntity[]

  @ManyToMany(() => BookmarkEntity, bookmark => bookmark.users)
  bookmarks: BookmarkEntity[];
}
