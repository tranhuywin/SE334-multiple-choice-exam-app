import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExamsService } from 'src/exams/exams.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateUserExamDto } from './dto/create-user-exam.dto';
import { UpdateUserExamDto } from './dto/update-user-exam.dto';
import { CorrectAnswer } from './entities/correct-answer.entity';
import { UserExam } from './entities/user-exam.entity';

@Injectable()
export class UserExamService {
  constructor(
    @InjectRepository(UserExam)
    private readonly userExamRepo: Repository<UserExam>,
    @InjectRepository(CorrectAnswer)
    private readonly correctAnswerRepo: Repository<CorrectAnswer>,
    private readonly examsService: ExamsService,
    private readonly usersService: UsersService,
  ) { }

  public async create(createUserExamDto: CreateUserExamDto, userId: string) {
    const exam = await this.examsService.findOne(createUserExamDto.examId);
    const userExam = new UserExam();

    //caculate score
    let score = 0;
    const correctAnswers = createUserExamDto.questions.map((question, index) => {
      let isCorrect = false;
      if (createUserExamDto.answers[index] === 1 && exam.questions[index].answerA.isCorrect) {
        score++;
        isCorrect = true;
      }
      if (createUserExamDto.answers[index] === 2 && exam.questions[index].answerB.isCorrect) {
        score++;
        isCorrect = true;
      }
      if (createUserExamDto.answers[index] === 3 && exam.questions[index].answerC.isCorrect) {
        score++;
        isCorrect = true;
      }
      if (createUserExamDto.answers[index] === 4 && exam.questions[index].answerD.isCorrect) {
        score++;
        isCorrect = true;
      }
      // create correctAnswer
      const correctAnswer = new CorrectAnswer();
      correctAnswer.questionId = exam.questions[index].id;
      correctAnswer.isCorrect = isCorrect;
      correctAnswer.userExam = userExam;
      return correctAnswer;
    });
    //create userExam
    userExam.score = score;
    userExam.exam = exam;
    userExam.user = await this.usersService.findOne(userId);
    const data = await this.userExamRepo.save(userExam);
    //create correctAnswer
    await this.correctAnswerRepo.save(correctAnswers);
    return data;
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
