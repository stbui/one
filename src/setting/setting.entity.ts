import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SettingEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'id' }) id: number;
  @Column({ comment: '设置项标示' }) key: string;
  @Column({ comment: '设置项描述', nullable: true }) describe: string;

  @Column({
    comment: '设置内容（json格式）',
    nullable: true,
    type: 'simple-json',
  })
  values: object;

  @Column({ comment: '小程序id', nullable: true }) app_id: number;

  @Column({ comment: '创建时间', nullable: true })
  create_time: Date = new Date();

  @Column({ comment: '更新时间', nullable: true }) update_time: Date;
}
