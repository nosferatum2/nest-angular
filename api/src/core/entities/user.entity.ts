import { IBookmark } from './bookmark.entity';
import { IAbstractEntity } from './abstractEntity';
import { IUserRole } from './user-roles.entity';

export class IUser extends IAbstractEntity<IUser> {
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  roles?: IUserRole[];
  bookmarks?: IBookmark[];

}
