import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Matches, MaxLength, MinLength } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({example:'dev@email.com'})
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({example:'123456'})
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
