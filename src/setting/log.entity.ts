import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class logEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'id' }) id: number;
  @Column({ comment: '用户id' }) user_id: number;
  @Column({ nullable: true, comment: '登录时间' }) create_time: Date;
  @Column({ nullable: true, comment: '登录用户名' }) ip: string;
}
