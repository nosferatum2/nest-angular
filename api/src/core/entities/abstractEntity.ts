export class IAbstractEntity<T> {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(entity?: Partial<T>) {
    Object.assign(this, entity);
  }
}
