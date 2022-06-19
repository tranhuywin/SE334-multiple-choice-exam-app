import { Exam } from "src/exams/entities/exam.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CorrectAnswer } from "./correct-answer.entity";

@Entity()
export class UserExam {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.userExam)
    user: User;

    @ManyToOne(() => Exam, exam => exam.userExam)
    exam: Exam;

    @OneToMany(() => CorrectAnswer, correctAnswer => correctAnswer.userExam)
    correctAnswers: CorrectAnswer[];

    @Column()
    score: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}
