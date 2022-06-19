import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserExamService } from './user-exam.service';
import { CreateUserExamDto } from './dto/create-user-exam.dto';
import { UpdateUserExamDto } from './dto/update-user-exam.dto';

@Controller('user-exam')
export class UserExamController {
  constructor(private readonly userExamService: UserExamService) {}

  @Post()
  create(@Body() createUserExamDto: CreateUserExamDto) {
    return this.userExamService.create(createUserExamDto);
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
