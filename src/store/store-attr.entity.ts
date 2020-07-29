import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StoreAttrEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: '商品id', name: 'id' }) goods_attr_id: number;
  @Column({ comment: '商品id' }) goods_id: string;
  @Column({ nullable: true, comment: '属性id' }) attr_id: number;
  @Column({ nullable: true, comment: '属性值' }) attr_value: number;
  @Column({ nullable: true, comment: '属性价格' }) attr_price: number;
  
  @Column({ nullable: true, comment: '创建时间' }) create_time: Date;
  @Column({ nullable: true, comment: '更新时间' })
  update_time: Date = new Date();

  @Column({ comment: '小程序ID' }) app_id: number;
}
