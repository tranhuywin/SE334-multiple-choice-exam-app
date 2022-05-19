import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Matches } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty()
    @IsOptional()
    @IsString()
    address?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    fullName?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @Matches(/^[0-9]*$/)
    wardId?: string;
}
