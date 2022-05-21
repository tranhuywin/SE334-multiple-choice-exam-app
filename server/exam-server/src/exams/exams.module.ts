import { Module } from '@nestjs/common';
import { ExamsService } from './exams.service';
import { ExamsController } from './exams.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exam } from './entities/exam.entity';
import { QuestionsModule } from 'src/questions/questions.module';
import { SubjectsModule } from 'src/subjects/subjects.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Exam]), QuestionsModule, SubjectsModule, UsersModule],
  controllers: [ExamsController],
  providers: [ExamsService]
})
export class ExamsModule { }
