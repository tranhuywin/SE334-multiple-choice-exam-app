import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
import { AnswersModule } from 'src/answers/answers.module';
import { SubjectsModule } from 'src/subjects/subjects.module';

@Module({
  imports: [TypeOrmModule.forFeature([Question]), AnswersModule, SubjectsModule],
  controllers: [QuestionsController],
  providers: [QuestionsService],
  exports: [QuestionsService],
})
export class QuestionsModule {}
