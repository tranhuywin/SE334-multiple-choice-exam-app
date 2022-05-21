import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { Answer } from './entities/answer.entity';

@Injectable()
export class AnswersService {
    constructor(
        @InjectRepository(Answer)
        private readonly answerRepo: Repository<Answer>,
    ) {}

    async create(CreateAnswerDto: CreateAnswerDto) {
        return await this.answerRepo.save(CreateAnswerDto);
    }
}
