import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnswersService } from 'src/answers/answers.service';
import { SubjectsService } from 'src/subjects/subjects.service';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionsService {
    constructor(
        @InjectRepository(Question)
        private readonly questionRepo: Repository<Question>,
        private readonly answersService: AnswersService,
    ) {}

    async create( CreateQuestionDto: CreateQuestionDto): Promise<Question> {
        //create answer
        const answer = await Promise.all(
            [
                await this.answersService.create(CreateQuestionDto.answerA),
                await this.answersService.create(CreateQuestionDto.answerB),
                await this.answersService.create(CreateQuestionDto.answerC),
                await this.answersService.create(CreateQuestionDto.answerD),
            ]
        )
        //create question
        const question = await this.questionRepo.create(CreateQuestionDto);
        question.answerA = answer[0];
        question.answerB = answer[1];
        question.answerC = answer[2];
        question.answerD = answer[3];
        return await this.questionRepo.save(question);
    }
}
