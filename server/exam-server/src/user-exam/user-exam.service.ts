import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExamsService } from 'src/exams/exams.service';
import { Repository } from 'typeorm';
import { CreateUserExamDto } from './dto/create-user-exam.dto';
import { UpdateUserExamDto } from './dto/update-user-exam.dto';
import { UserExam } from './entities/user-exam.entity';

@Injectable()
export class UserExamService {
  constructor(
    @InjectRepository(UserExam)
    private readonly userExamRepository: Repository<UserExam>,
    private readonly examsService: ExamsService,
  ){}

  public async create(createUserExamDto: CreateUserExamDto) {
    
  }

  findAll() {
    return `This action returns all userExam`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userExam`;
  }

  update(id: number, updateUserExamDto: UpdateUserExamDto) {
    return `This action updates a #${id} userExam`;
  }

  remove(id: number) {
    return `This action removes a #${id} userExam`;
  }
}
