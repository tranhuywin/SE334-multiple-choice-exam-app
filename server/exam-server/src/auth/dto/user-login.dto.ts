import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches, MaxLength, MinLength } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({example:'0989999999'})
  @IsNotEmpty()
  @MaxLength(11)
  @MinLength(10)
  @Matches(/^[0-9]*$/)
  phone: string;

  @ApiProperty({example:'123456'})
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
