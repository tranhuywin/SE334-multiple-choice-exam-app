import { Module } from '@nestjs/common';
import { UserExamService } from './user-exam.service';
import { UserExamController } from './user-exam.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CorrectAnswer } from './entities/correct-answer.entity';
import { UserExam } from './entities/user-exam.entity';
import { ExamsModule } from 'src/exams/exams.module';
import { UsersModule } from 'src/users/users.module';
import { Question } from 'src/questions/entities/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserExam, CorrectAnswer, Question]), ExamsModule, UsersModule],
  controllers: [UserExamController],
  providers: [UserExamService]
})
export class UserExamModule {}
