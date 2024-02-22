export interface IBaseRepository<Entity> {
  findAll(): Promise<Entity[]>;

  findByCondition(filterCondition: any): Promise<Entity[]>;

  get(id: string): Promise<Entity>;

  save(item: Entity): Promise<Entity>;

  delete(id: string): Promise<void | boolean>;
}
