import { IGenericRepository } from '../../../core';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

export class PostgresAbstractRepository<T> implements IGenericRepository<T> {

  private entity: Repository<T>;

  constructor(
    entity: Repository<T>
  ) {
    this.entity = entity;
  }

  public async findAll(): Promise<T[]> {
    return await this.entity.find();
  };

  public async findByCondition(filterCondition: any): Promise<T> {
    return await this.entity.findOne({ where: filterCondition });
  }

  public async findWithRelations(relations: any): Promise<T[]> {
    return await this.entity.find(relations);
  }

  public async create(data: T | any): Promise<T> {
    return await this.entity.save(data);
  }

  // TODO: solve problem with type passing
  // TODO: fix logic
  public async update(id: string, data: T | any): Promise<UpdateResult> {
    return await this.entity.update(id, data)
  }

  public async delete(id: string): Promise<DeleteResult> {
    return await this.entity.delete(id)
  }

}
