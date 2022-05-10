import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, MinLength } from 'class-validator';

export class ForgotPasswordDTO {
  @ApiProperty()
  @IsNotEmpty()
  phone: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ApiProperty()
  @IsDateString()
  date: string;
}
