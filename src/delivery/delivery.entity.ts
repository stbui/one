import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DeliverEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: '模板id', name: 'id' })
  delivery_id: string;

  @Column({ comment: '模板名称' }) name: string;

  @Column({ comment: '计费方式(10按件数 20按重量)', default: 10 })
  method: number;

  @Column({ comment: '排序方式(数字越小越靠前)', default: 0 }) sort: number;

  @Column({ comment: '小程序id', nullable: true, name: 'app_id' })
  wxapp_id: number;

  @Column({
    comment: '创建时间',
    nullable: true,
    default: +new Date(),
    readonly: true,
  })
  create_time: number;

  @Column({ comment: '更新时间', nullable: true })
  update_time: string;
}

@Entity()
export class DeliverRuleEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: '规则id', name: 'id' })
  rule_id: string;

  @Column({ comment: '配送模板id' }) delivery_id: number;

  @Column({ comment: '可配送区域(城市id集)', type: 'text' })
  region: string;

  @Column({ comment: '首件(个)/首重(Kg)', default: 0 }) first: number;
  @Column({ comment: '运费(元)', default: 0 }) first_fee: number;
  @Column({ comment: '续件/续重', default: 0 }) additional: number;
  @Column({ comment: '续费(元)', default: 0 }) additional_fee: number;

  @Column({ comment: '小程序id', nullable: true, name: 'app_id' })
  wxapp_id: number;

  @Column({
    comment: '创建时间',
    nullable: true,
    default: +new Date(),
    readonly: true,
  })
  create_time: number;

  @Column({ comment: '更新时间', nullable: true })
  update_time: string;
}
