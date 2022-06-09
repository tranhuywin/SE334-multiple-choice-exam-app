import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { ExamsService } from './exams.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import JwtAuthGuard from 'src/auth/guard/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guard/role.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/roles.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';

@Controller('exams')
@ApiTags('Exams')
export class ExamsController {
  constructor(private readonly examsService: ExamsService) {}

  //access only for role teacher
  @Roles(Role.TEACHER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth('JWT-auth')
  @Post()
  async create(@Body() createExamDto: CreateExamDto, @Request() req: Request & { user: User }) {
    return await this.examsService.create(createExamDto, req.user.id);
  }

  @Get()
  async findAll() {
    return await this.examsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.examsService.findOne(+id);
  }
}
