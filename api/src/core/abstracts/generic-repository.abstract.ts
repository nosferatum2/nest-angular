import { DeleteResult, UpdateResult } from 'typeorm';

export abstract class IGenericRepository<T> {
  abstract findAll(): Promise<T[]>;

  abstract findByCondition(filterCondition: any): Promise<T>;

  abstract findWithRelations(relations: any): Promise<T[]>;

  abstract create(item: T | any): Promise<T>;

  abstract update(id: string, item: T | any): Promise<UpdateResult>;

  abstract delete(id: string): Promise<DeleteResult>

}
