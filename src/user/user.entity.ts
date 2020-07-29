import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// 用户记录表
@Entity()
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: '用户id', name: 'id' }) id: number;
  @Column({ comment: '微信openid(唯一标示)' }) open_id: string;
  @Column({ comment: '微信昵称', nullable: true }) nickName: string;
  @Column({ comment: '微信头像', nullable: true }) avatarUrl: string;
  @Column({ comment: '性别', nullable: true }) gender: string;
  @Column({ comment: '国家', nullable: true }) country: string;
  @Column({ comment: '省份', nullable: true }) province: string;
  @Column({ comment: '城市', nullable: true }) city: string;
  @Column({ comment: '默认收货地址', nullable: true }) address_id: string;
  @Column({ comment: '用户余额', nullable: true }) money: number;
  @Column({ comment: '消费金额', nullable: true }) shop_money: number;
  @Column({ comment: '推广收益', nullable: true }) profit: number;
  @Column({ comment: '是否删除', nullable: true }) is_delete: boolean;
  @Column({ comment: '密码', nullable: true }) password: string;
  @Column({ comment: '推荐', nullable: true }) pid: number;
  @Column({ comment: 'level', nullable: true }) level: string;
  @Column({ comment: '用户签到天数', nullable: true }) sign: number;
  @Column({ comment: '用户积分', nullable: true }) integral: number;
  @Column({ comment: '关系树', nullable: true }) path: string;
  @Column({ comment: '折扣', nullable: true }) agio: string;
  @Column({ comment: 'phone', nullable: true }) phone: number;
  @Column({ comment: '小程序id', nullable: true }) app_id: number;
  @Column({ comment: '创建时间', nullable: true })
  create_time: Date = new Date();
  @Column({ comment: '更新时间', nullable: true })
  update_time: Date = new Date();
}
