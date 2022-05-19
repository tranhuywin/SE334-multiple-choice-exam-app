import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'admins', engine: 'InnoDB' })
export class Admin {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  id: number;

  @Column({ length: 255 })
  password: string;

  @Column({ name: 'username', length: 255 })
  userName: string;

  @Column({ name: 'refresh_token', length: 255, default: null })
  refreshToken: string;

  @Column({ name: 'role' })
  role: number;


  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
