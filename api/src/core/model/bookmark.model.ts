import { IBaseEntityModel } from 'src/common';
import { IUser } from './user.model';

export interface IBookmark extends IBaseEntityModel {
  title?: string;
  description?: string;
  link?: string;
  users?: IUser[];
}
