import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Not, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { AuthPhoneNumberDto } from './dto/authPhoneNumber.dto';

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

  async authPhoneNumber(userId: number, authPhoneNumberDto: AuthPhoneNumberDto): Promise<User> {
    const phoneUser = await this.userRepo.findOne({ phoneNumber: authPhoneNumberDto.phoneNumber });
    if (phoneUser) {
      throw new BadRequestException('Phone number is already used by another user');
    }

    const user = await this.userRepo.findOne({
      where: {
        id: userId,
        zaloId: Not(IsNull()),
        phoneNumber: IsNull(),
      }
    });
    if (!user) {
      throw new BadRequestException('zaloId is not found or phoneNumber is already avaliable');
    }
    const hashPassword = await bcrypt.hash(authPhoneNumberDto.password, 10);

    await this.userRepo.update(user.id, { phoneNumber: authPhoneNumberDto.phoneNumber, password: hashPassword });
    return await this.userRepo.findOne(user.id);
  }


  async findOne(obj: any): Promise<User> {
    const user = await this.userRepo.findOne(obj, { relations: ['ward', 'ward.district', 'ward.district.province'] });
    return user;
  }

  async updateByPhone(phoneNumber: string, obj: any): Promise<User> {
    const user = await this.userRepo.findOne({ phoneNumber: phoneNumber, isDeleted: false });
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

    delete updateUserDto.wardId;

    await this.userRepo.save(user);
    await this.userRepo.update(user.id, { ...updateUserDto });
    return await this.userRepo.findOne(id);
  }

  async findByPhoneNumber(phoneNumber: string): Promise<{ status: number, message: string }> {
    const user = await this.userRepo.findOne({ phoneNumber: phoneNumber, isDeleted: false });
    if (user) {
        return { status: 1, message: 'phonenumber is already used' }

    }
    else {
      return { status: 0, message: 'phonenumber is not avaliable' }
    }
  }
}
