import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Url } from '../../url/entities/url.entity';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column('text')
  password: string;

  @OneToOne(() => Url, (url) => url.users)
  @JoinColumn()
  Url: Url;
}
