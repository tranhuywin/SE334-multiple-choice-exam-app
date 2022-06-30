import { Question } from "src/questions/entities/question.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserExam } from "./user-exam.entity";

@Entity()
export class CorrectAnswer {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=> Question, question => question.correctAnswers)
    question: Question;

    @Column()
    isCorrect: boolean;

    @ManyToOne(() => UserExam, userExam => userExam.correctAnswers)
    userExam: UserExam;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}
