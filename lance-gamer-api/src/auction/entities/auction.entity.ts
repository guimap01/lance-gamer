import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Auction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  price: number;

  @Column()
  userId: string;

  @Column()
  startTime: Date;

  @Column()
  isOver: boolean;
}
