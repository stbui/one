import { ApiModelProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class StoreEntity extends BaseEntity {
  @ApiModelProperty()
  @PrimaryGeneratedColumn({ comment: '商品id', name: 'id' })
  id: number;
  @ApiModelProperty() @Column({ comment: '商品名称' }) goods_name: string;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '初始销量' })
  sales_initial: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '商品分类id' })
  category_id: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '点击数' })
  click: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '品牌id' })
  brand_id: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '库存数量' })
  store_count: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '商品评论数' })
  comment_count: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '商品重量克为单位' })
  weight: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '商品简单描述' })
  goods_remark: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '商品详细描述' })
  goods_content: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '是否为实物' })
  is_real: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '是否上架' })
  is_on_sale: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '是否包邮0否1是' })
  is_free_shipping: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '商品排序' })
  sort: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '是否推荐' })
  is_recommend: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '是否新品' })
  is_new: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '是否热卖' })
  is_hot: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '0为不支持1为支持' })
  coupon: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '0为不支持1为支持' })
  vip: number;
  @ApiModelProperty()
  @Column({
    nullable: true,
    comment: '商品所属类型id，取值表goods_type的cat_id',
  })
  goods_type: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '商品规格类型，取值表goods_type的cat_id' })
  spec_type: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '购买商品赠送积分' })
  give_integral: number;
  @ApiModelProperty()
  @Column({
    nullable: true,
    comment: '积分兑换：0不参与积分兑换，积分和现金的兑换比例100：1',
  })
  exchange_integral: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '商品销量' })
  sales_sum: number;
  @ApiModelProperty()
  @Column({
    nullable: true,
    comment: '0 普通订单,1 限时抢购, 2 团购 , 3 促销优惠',
  })
  prom_type: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '优惠活动id' })
  prom_id: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '运费模板id' })
  delivery_id: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '折扣' })
  discount: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '1百分比2固定' })
  agent_type: number;
  @ApiModelProperty()
  @Column({ nullable: true, comment: '分销金额' })
  agent_price: number;

  @ApiModelProperty()
  @CreateDateColumn()
  @Column({ nullable: true, comment: '创建时间' })
  create_time: Date;
  @ApiModelProperty()
  @UpdateDateColumn()
  @Column({ nullable: true, comment: '更新时间' })
  update_time: Date = new Date();

  @ApiModelProperty() @Column({ comment: '小程序ID' }) app_id: number;
}
