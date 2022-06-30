import { Answer } from 'src/answers/entities/answer.entity';
import { Exam } from 'src/exams/entities/exam.entity';
import { CorrectAnswer } from 'src/user-exam/entities/correct-answer.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', nullable: true })
    content: string;

    @Column()
    urlImage: string;

    //@Column({name: 'answer_a_id'})
    @OneToOne(() => Answer, answer => answer.id)
    @JoinColumn()
    answerA: Answer;


    @OneToOne(() => Answer, answer => answer.id)
    @JoinColumn()
    answerB: Answer;

    // @Column({name: 'answer_c_id'})
    @OneToOne(() => Answer, answer => answer.id)
    @JoinColumn()
    answerC: Answer;

    // @Column({name: 'answer_d_id'})
    @OneToOne(() => Answer, answer => answer.id)
    @JoinColumn()
    answerD: Answer;

    @ManyToOne(() => Exam, exam => exam.questions)
    exam: Exam;

    @OneToMany( () => CorrectAnswer, correctAnswer => correctAnswer.question)
    correctAnswers: CorrectAnswer[];

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}
