import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'users', engine: 'InnoDB' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Column({ name: 'password', nullable: true })
  password: string;

  @Column({ name: 'refresh_token', length: 255, default: null })
  refreshToken: string;

  @Column({ name: 'email', nullable: true })
  email: string;

  @Column()
  role: number;
  
  @Column({ name: 'address', default: null })
  address: string;

  @Column({ name: 'fullName', default: null })
  fullName: string;

  @Column({default: null})
  avatar: string;

  @Column({name: 'is_delete', default: false})
  isDeleted: boolean;

  @CreateDateColumn({ name: "created_at" })
  createdAt: string;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: string; 
}