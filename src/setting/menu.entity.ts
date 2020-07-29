import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// 商家用户权限表
@Entity()
export class MenuEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'id' }) id: number;
  @Column({ comment: '用户id' }) name: number;
  @Column({ nullable: true, comment: '权限url' }) url: string;
  @Column({ nullable: true, comment: '父级id' }) pid: number;
  @Column({ nullable: true, comment: '排序' }) sort: number;
  @Column({ nullable: true, comment: '创建时间' }) create_time: Date;
  @Column({ nullable: true, comment: '更新时间' }) update_time: Date;
  @Column({ nullable: true, comment: '模块' }) model: string;
  @Column({ nullable: true, comment: 'icom图标' }) icon: string;
  @Column({ nullable: true, comment: 'app_id' }) app_id: number;
}
