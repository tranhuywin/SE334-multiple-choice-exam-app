import { CreateAnswerDto } from "src/answers/dto/create-answer.dto";

export class CreateQuestionDto{
    readonly content: string;
    readonly answerA: CreateAnswerDto;
    readonly answerB: CreateAnswerDto;
    readonly answerC: CreateAnswerDto;
    readonly answerD: CreateAnswerDto;
    readonly urlImage: string;
}