import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// 商家用户
@Entity()
export class WebUserEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: '用户id', name: 'id' }) user_id: number;
  @Column({ comment: '用户名' }) user_name: string;
  @Column({ nullable: true, comment: '登录密码' }) password: string;
  @Column({ nullable: true, comment: '微信昵称' }) is_delete: string;
  @Column({ nullable: true, comment: '微信昵称' }) real_name: string;
  @Column({ nullable: true, comment: '超级管理员' }) is_super: string;
  @Column({ nullable: true, comment: '主帐号id' }) pid: string;
  @Column({ nullable: true, comment: '权限组ID' }) role_id: string;
  @Column({ nullable: true, comment: '手机号' }) phone: string;
  @Column({ nullable: true, comment: '备注' }) note: string;
  @Column({ nullable: true, comment: 'vip等级' }) vip: string;

  @Column({ nullable: true, comment: '小程序id' }) app_id: number;
  @Column({ nullable: true, comment: '创建时间' })
  create_time: Date = new Date();
  @Column({ nullable: true, comment: '更新时间' })
  update_time: Date = new Date();
}
