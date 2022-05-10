import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginAdminDTO {
  @ApiProperty({example: 'admin'})
  @IsNotEmpty()
  username: string;

  @ApiProperty({example: '123456Admin!'})
  @IsNotEmpty()
  password: string;
}
