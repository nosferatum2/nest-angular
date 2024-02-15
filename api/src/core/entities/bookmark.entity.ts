import { IAbstractEntity } from './abstractEntity';

export class IBookmark extends IAbstractEntity<IBookmark> {
  title?: string;
  description?: string;
  link?: string;
}
