import { IBaseRepository } from 'src/common';
import { IUser } from '../model';

export interface UserRepository extends IBaseRepository<IUser> {}

export const userRepository = Symbol('UserRepository');
