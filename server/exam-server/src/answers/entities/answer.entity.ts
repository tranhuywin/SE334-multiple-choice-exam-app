import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Answer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'boolean', default: false })
    isCorrect: boolean;

    @Column({ type: 'text', nullable: true })
    content: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}
