import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
} from 'typeorm';
import { Users } from '../../users/entities/user.entity';
@Entity('url')
export class Url {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  short_url: string;

  @Column()
  long_url: string;

  @Column('boolean', { default: true })
  isActive: boolean = true;

  @CreateDateColumn()
  creation_date: Date;

  @Column()
  user_id: number;

  @OneToOne(() => Users, (users) => users.Url)
  users: Users;
}
