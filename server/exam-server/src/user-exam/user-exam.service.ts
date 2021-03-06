import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExamsService } from 'src/exams/exams.service';
import { Question } from 'src/questions/entities/question.entity';
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
    @InjectRepository(Question)
    private readonly questionRepo: Repository<Question>,
    private readonly examsService: ExamsService,
    private readonly usersService: UsersService,
  ) { }

  public async create(createUserExamDto: CreateUserExamDto, userId: number) {
    const exam = await this.examsService.findOne(createUserExamDto.examId);
    const userExam = new UserExam();
    //console.log(exam.questions);
    //caculate score
    const totalQuestion = exam.questions.length;
    const scorceAQuestion = 10 / totalQuestion;
    let score = 0;
    const correctAnswers = await Promise.all(exam.questions.map(async (question, index) => {
      let isCorrect = false;

      if (createUserExamDto.answers[index] === 1 && question.answerA.isCorrect) {
        score += scorceAQuestion;
        isCorrect = true;
      }
      if (createUserExamDto.answers[index] === 2 && question.answerB.isCorrect) {
        score += scorceAQuestion;
        isCorrect = true;
      }
      if (createUserExamDto.answers[index] === 3 && question.answerC.isCorrect) {
        score += scorceAQuestion;
        isCorrect = true;
      }
      if (createUserExamDto.answers[index] === 4 && question.answerD.isCorrect) {
        score += scorceAQuestion;
        isCorrect = true;
      }
      // create correctAnswer
      const correctAnswer = new CorrectAnswer();
      correctAnswer.question= await this.questionRepo.findOne(exam.questions[index].id);
      correctAnswer.isCorrect = isCorrect;
      correctAnswer.userExam = userExam;
      return correctAnswer;
    }));
    //create userExam
    userExam.score = score;
    userExam.time = createUserExamDto.time;
    userExam.exam = exam;
    userExam.user = await this.usersService.findOne(userId);
    const data = await this.userExamRepo.save(userExam);
    //create correctAnswer
    await this.correctAnswerRepo.save(correctAnswers);
    return { score };
  }

  public async findAll(userId: number) {
    return this.userExamRepo.createQueryBuilder('userExam')
      .leftJoinAndSelect('userExam.exam', 'exam')
      .leftJoinAndSelect('userExam.correctAnswers', 'correctAnswers')
      .leftJoinAndSelect('correctAnswers.question', 'question')
      .where('userExam.userId = :userId', { userId })
      .getMany();
  }
}