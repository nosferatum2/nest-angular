import { Column, Entity, ManyToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
import { BaseEntity } from '../base.entity';
import { BookmarkEntity } from './bookmark.entity';
import { IUser } from 'src/core';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

// db entity
@Entity('user')
export class UserEntity extends BaseEntity<UserEntity> implements IUser {

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

  @ManyToMany(() => BookmarkEntity, bookmark => bookmark.users)
  bookmarks: BookmarkEntity[];
}
