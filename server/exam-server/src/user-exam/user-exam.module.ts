import { Module } from '@nestjs/common';
import { UserExamService } from './user-exam.service';
import { UserExamController } from './user-exam.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CorrectAnswer } from './entities/correct-answer.entity';
import { UserExam } from './entities/user-exam.entity';
import { ExamsModule } from 'src/exams/exams.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserExam, CorrectAnswer]), ExamsModule],
  controllers: [UserExamController],
  providers: [UserExamService]
})
export class UserExamModule {}
