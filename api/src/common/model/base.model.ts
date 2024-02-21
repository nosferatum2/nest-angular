export interface IBaseEntityModel {
  id?: string; // Unique identifier
  readonly createdAt?: Date; // Date when the record was created
  readonly updatedAt?: Date; // Date when the record was last updated
}
