import { ApiProperty } from "@nestjs/swagger";

export class CreateUserExamDto {
    @ApiProperty()
    examId: number;

    @ApiProperty()
    questions: number[];

    @ApiProperty()
    answers: number[];
}