import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  create(user: Partial<Users>): Promise<Users> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<Users> {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, user: Partial<Users>): Promise<Users> {
    await this.userRepository.update(id, user);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
