import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('opportunities')
class Opportunities {
  @PrimaryGeneratedColumn('uuid')
  uuId: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  local: string

  @Column()
  quantity: number

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Opportunities;
