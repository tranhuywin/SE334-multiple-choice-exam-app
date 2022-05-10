import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length, Matches } from 'class-validator';

export class AuthPhoneNumberDto {
  @ApiProperty()
  @IsNotEmpty()
  @Matches(/^[0-9]*$/)
  phoneNumber: string;

  @ApiProperty()
  @Length(6, 6)
  password: string;
}
