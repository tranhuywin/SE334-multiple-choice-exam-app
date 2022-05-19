import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length, Matches } from 'class-validator';

export class AuthEmailDto {
  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  password: string;
}
