import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, MinLength } from 'class-validator';

export class ForgotPasswordDTO {
  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
