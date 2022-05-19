import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Not, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { AuthEmailDto } from './dto/authPhoneNumber.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userRepo.create(createUserDto);
    return await this.userRepo.save(user);
  }

  async find(obj: any): Promise<User[]> {
    return await this.userRepo.find(obj);
  }

  async authEmail(userId: number, authEmailDto : AuthEmailDto): Promise<User> {
    const emailUser = await this.userRepo.findOne({ email: authEmailDto.email });
    if (emailUser) {
      throw new BadRequestException('email is already used by another user');
    }

    const user = await this.userRepo.findOne({
      where: {
        id: userId,
        zaloId: Not(IsNull()),
        email: IsNull(),
      }
    });
    if (!user) {
      throw new BadRequestException('zaloId is not found or Email is already avaliable');
    }
    const hashPassword = await bcrypt.hash(authEmailDto.password, 10);

    await this.userRepo.update(user.id, { email: authEmailDto.email, password: hashPassword });
    return await this.userRepo.findOne(user.id);
  }


  async findOne(obj: any): Promise<User> {
    const user = await this.userRepo.findOne(obj);
    return user;
  }

  async updateByEmail(email: string, obj: any): Promise<User> {
    const user = await this.userRepo.findOne({ email: email, isDeleted: false });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.userRepo.update(user.id, obj);
    return await this.userRepo.findOne(user.id);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepo.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.userRepo.save(user);
    await this.userRepo.update(user.id, { ...updateUserDto });
    return await this.userRepo.findOne(id);
  }

  async findByEmail(email: string): Promise<{ status: number, message: string }> {
    const user = await this.userRepo.findOne({ email: email, isDeleted: false });
    if (user) {
        return { status: 1, message: 'email is already used' }

    }
    else {
      return { status: 0, message: 'email is not avaliable' }
    }
  }
}
