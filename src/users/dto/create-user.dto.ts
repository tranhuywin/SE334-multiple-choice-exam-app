import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @Matches(/^[0-9]*$/)
  phoneNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  refreshToken: string;
}
