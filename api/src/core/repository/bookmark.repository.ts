import { IBaseRepository } from 'src/common';
import { IBookmark } from '../model';

export interface BookmarkRepository extends IBaseRepository<IBookmark> {}

export const bookmarkRepository = Symbol('BookmarkRepository');
