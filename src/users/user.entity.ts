import { Table, Column, Model, HasMany } from 'sequelize-typescript';
@Table
export class User extends Model {
  @Column
  firstName: string;
  @Column
  lastName: string;
  @Column({ defaultValue: true })
  isActive: boolean;
}
