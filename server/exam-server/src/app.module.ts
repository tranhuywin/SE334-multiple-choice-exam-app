import { Module } from '@nestjs/common';
import { AdminsModule } from './admins/admins.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { QuestionsModule } from './questions/questions.module';
import { AnswersModule } from './answers/answers.module';


@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UsersModule,
    AdminsModule,
    QuestionsModule,
    AnswersModule,
  ],
})
export class AppModule {}
