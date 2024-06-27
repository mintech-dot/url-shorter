import { Injectable } from '@nestjs/common';
import { Url } from '../entities/url.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUrlDto } from '../dto/create-url.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(Url)
    private userRepository: Repository<Url>,
  ) {}

  async create(registerDto: CreateUrlDto) {
    const hashedUrl = await bcrypt.hash(registerDto.long_url, 10);
    const url = hashedUrl.slice(-6);
    const deafualtUrl = 'https://localhost:3000/' + url;

    const newUser = await this.userRepository.create({
      ...registerDto,
      short_url: deafualtUrl,
    });

    return this.userRepository.save(newUser);
  }

  findAll(): Promise<Url[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<Url> {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, user: Partial<Url>): Promise<Url> {
    await this.userRepository.update(id, user);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
