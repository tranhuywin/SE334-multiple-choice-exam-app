import { ApiProperty } from "@nestjs/swagger";

export class CreateUserExamDto {
    @ApiProperty()
    examId: number;

    @ApiProperty({type: [Number]})
    answers: number[];

    @ApiProperty()
    time: number;
}