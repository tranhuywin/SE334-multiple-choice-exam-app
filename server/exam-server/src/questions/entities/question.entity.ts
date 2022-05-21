import { Answer } from 'src/answers/entities/answer.entity';
import { Exam } from 'src/exams/entities/exam.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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
    answerA: Answer;


    @OneToOne(() => Answer, answer => answer.id)
    answerB: Answer;

    // @Column({name: 'answer_c_id'})
    @OneToOne(() => Answer, answer => answer.id)
    answerC: Answer;

    // @Column({name: 'answer_d_id'})
    @OneToOne(() => Answer, answer => answer.id)
    answerD: Answer;

    @ManyToOne(() => Exam, exam => exam.questions)
    exam: Exam;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}
