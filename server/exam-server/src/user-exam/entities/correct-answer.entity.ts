import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserExam } from "./user-exam.entity";

@Entity()
export class CorrectAnswer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    questionId: number;

    @Column()
    isCorrect: boolean;

    @ManyToOne(() => UserExam, userExam => userExam.correctAnswers)
    userExam: UserExam;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}
