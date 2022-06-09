import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject } from './entities/subject.entity';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectRepo: Repository<Subject>,
  ) {}

  async create(createSubjectDto: CreateSubjectDto) {
    return await this.subjectRepo.save(createSubjectDto);
  }

  async findAll(): Promise<Subject[]> {
    return await this.subjectRepo.find();
  }

  async findOne(id: number): Promise<Subject> {
    return await this.subjectRepo.findOne({
      where: { id },
      relations: ['exam'],
    });
  } 
}
