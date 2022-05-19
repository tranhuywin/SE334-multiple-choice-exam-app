import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginThirdDTO {
  @ApiProperty({example: 'third-party'})
  @IsNotEmpty()
  userName: string;

  @ApiProperty({example: '321321A!'})
  @IsNotEmpty()
  password: string;
}
