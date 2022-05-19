import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateDeliveryUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  fullNameRecipient: string;

  @ApiProperty()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  dateUpdate: Date;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  phoneNumberRecipient: string;

  @ApiProperty()
  gift: string;

  @ApiProperty()
  weekId: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  status: number;

  @ApiProperty()
  district: string;

  @ApiProperty()
  province: string;

  @ApiProperty()
  ward: string;
}
