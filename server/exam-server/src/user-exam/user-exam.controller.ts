import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UserExamService } from './user-exam.service';
import { CreateUserExamDto } from './dto/create-user-exam.dto';
import { UpdateUserExamDto } from './dto/update-user-exam.dto';
import JwtAuthGuard from 'src/auth/guard/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';

@Controller('user-exam')
export class UserExamController {
  constructor(private readonly userExamService: UserExamService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  create(@Body() createUserExamDto: CreateUserExamDto,  @Request() req: Request & { user: User }) {
    return this.userExamService.create(createUserExamDto, req?.user?.id || 1);
  }

  @Get()
  findAll() {
    return this.userExamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userExamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserExamDto: UpdateUserExamDto) {
    return this.userExamService.update(+id, updateUserExamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userExamService.remove(+id);
  }
}
