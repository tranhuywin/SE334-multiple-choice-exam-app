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

  public async create(createUserExamDto: CreateUserExamDto, userId: number) {
    const exam = await this.examsService.findOne(createUserExamDto.examId);
    const userExam = new UserExam();
    //console.log(exam.questions);
    //caculate score
    let score = 0;
    const correctAnswers = exam.questions.map((question, index) => {
      let isCorrect = false;
      
      if (createUserExamDto.answers[index] === 1 && question.answerA.isCorrect) {
        score++;
        isCorrect = true;
      }
      if (createUserExamDto.answers[index] === 2 && question.answerB.isCorrect) {
        score++;
        isCorrect = true;
      }
      if (createUserExamDto.answers[index] === 3 && question.answerC.isCorrect) {
        score++;
        isCorrect = true;
      }
      if (createUserExamDto.answers[index] === 4 && question.answerD.isCorrect) {
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
    return {score};
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
