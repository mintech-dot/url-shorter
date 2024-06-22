import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async create(registerDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    const newUser = await this.userRepository.create({
      ...registerDto,
      password: hashedPassword,
    });

    return this.userRepository.save(newUser);
  }

  findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<Users> {
    return this.userRepository.findOne({ where: { id } });
  }

  async findOneByEmail(email: string): Promise<Users | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  async update(id: number, user: Partial<Users>): Promise<Users> {
    await this.userRepository.update(id, user);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
