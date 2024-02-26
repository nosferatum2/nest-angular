import { IBookmark } from './bookmark.model';
import { IBaseEntityModel } from 'src/common';
import { IUserRole } from './user-roles.model';

export interface IUser extends IBaseEntityModel {
  email?: string;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: IUserRole[];
  bookmarks?: IBookmark[];

}
