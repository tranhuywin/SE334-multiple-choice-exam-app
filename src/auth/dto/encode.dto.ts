import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class EncodeDTO {
  @ApiProperty()
  @IsNotEmpty()
  encrypt: string;
}
