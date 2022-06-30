import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, Min } from "class-validator";

class AnswerDto {
    @ApiProperty({ default: false })
    @IsBoolean()
    isCorrect: boolean;

    @ApiProperty({ 
        default: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' 
    })
    content: string;
}

class QuestionDto {
    @ApiProperty({ 
        default: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' 
    })
    content: string;

    @ApiProperty()
    urlImage: string;

    @ApiProperty()
    answerA: AnswerDto;

    @ApiProperty()
    answerB: AnswerDto;

    @ApiProperty()
    answerC: AnswerDto;

    @ApiProperty()
    answerD: AnswerDto;
}

export class CreateExamDto {
    @ApiProperty({ default: 45 })
    @IsNumber()
    @Min(1)
    readonly time: number;

    @ApiProperty()
    @IsNumber()
    readonly idSubject: number;

    @ApiProperty()
    readonly title: string;

    @ApiProperty({ type: [QuestionDto] })
    readonly questions: QuestionDto[];
}
