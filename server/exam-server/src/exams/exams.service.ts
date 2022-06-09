import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionsService } from 'src/questions/questions.service';
import { SubjectsService } from 'src/subjects/subjects.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { Exam } from './entities/exam.entity';

@Injectable()
export class ExamsService {
  constructor(
    @InjectRepository(Exam)
    private readonly examRepo: Repository<Exam>,
    private readonly questionsService: QuestionsService,
    private readonly subjectsService: SubjectsService,
    private readonly usersService: UsersService,
  ) {}
  
  async create(createExamDto: CreateExamDto, userId: number) {
    //create question
    const questions = await Promise.all(
      createExamDto.questions.map(async (question) => {
        return await this.questionsService.create(question);
      }
    ));
    //find user
    const user = await this.usersService.findOne(userId);
    //find subject
    const subject = await this.subjectsService.findOne(createExamDto.idSubject);
    //create exam
    const exam = await this.examRepo.create(createExamDto);
    exam.questions = questions;
    exam.subject = subject;
    exam.user = user;
    return await this.examRepo.save(exam);

  }

  findAll() {
    return `This action returns all exams`;
  }

  async findOne(id: number) {
    return await this.examRepo.findOne({
      where: { id },
      relations: ['questions', 'questions.answerA', 'questions.answerB', 'questions.answerC', 'questions.answerD', 'subject', 'user'],
    });
  }

  update(id: number, updateExamDto: UpdateExamDto) {
    return `This action updates a #${id} exam`;
  }

  remove(id: number) {
    return `This action removes a #${id} exam`;
  }
}
