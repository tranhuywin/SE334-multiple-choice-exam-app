import { ApiProperty } from "@nestjs/swagger";

export class CreateUserExamDto {
    @ApiProperty()
    examId: number;

    @ApiProperty()
    answers: number[];
}