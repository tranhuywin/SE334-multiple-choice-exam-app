import { Question } from "src/questions/entities/question.entity";
import { Subject } from "src/subjects/entities/subject.entity";
import { UserExam } from "src/user-exam/entities/user-exam.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Exam {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    time: number;

    @Column()
    title: string;

    @ManyToOne(() => Subject, subject => subject.exam)
    subject: Subject;

    @ManyToOne( () => User, user => user.exam)
    user: User;

    @OneToMany(() => Question, question => question.exam)
    questions: Question[];

    @OneToMany(() => UserExam, UserExam => UserExam.exam)
    userExam: UserExam[];

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}
