import { IBaseEntityModel } from 'src/common';
import { IUser } from './user.model';

export interface IBookmark extends IBaseEntityModel {
  title?: string;
  description?: string | null;
  link?: string | null;
  users?: IUser[];
}
