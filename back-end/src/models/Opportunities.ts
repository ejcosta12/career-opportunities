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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}

export default Opportunities;
