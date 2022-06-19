import { Module } from '@nestjs/common';
import { AdminsModule } from './admins/admins.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { QuestionsModule } from './questions/questions.module';
import { AnswersModule } from './answers/answers.module';
import { ExamsModule } from './exams/exams.module';
import { SubjectsModule } from './subjects/subjects.module';
import { UserExamModule } from './user-exam/user-exam.module';


@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UsersModule,
    AdminsModule,
    QuestionsModule,
    AnswersModule,
    ExamsModule,
    SubjectsModule,
    UserExamModule,
  ],
})
export class AppModule {}
