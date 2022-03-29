import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  fullName: string;

  @Column({ nullable: false })
  cpf: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;
}
