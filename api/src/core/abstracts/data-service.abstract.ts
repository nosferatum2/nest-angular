import { IGenericRepository } from './generic-repository.abstract';
import { IBookmark, IUser } from '../entities';

export abstract class IDataServices {
  abstract users: IGenericRepository<IUser>;

  abstract bookmarks: IGenericRepository<IBookmark>;

  // abstract genres: IGenericRepository<Genre>;
}
