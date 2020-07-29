import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'id', name: 'id' }) order_id: number;
  @Column({ comment: '订单号' }) order_no: number = +new Date();
  @Column({ comment: '订单金额(不含运费)' }) total_price: number;
  @Column({ comment: '优惠券id', nullable: true }) coupon_id: number;
  @Column({ comment: '优惠券抵扣金额', nullable: true }) coupon_price: number = 0;
  @Column({ comment: '实际付款金额(包含运费)', nullable: true })
  pay_price: number;
  @Column({ comment: '后台修改的订单金额（差价）', nullable: true })
  update_price: number;
  @Column({ comment: '买家留言', nullable: true }) buyer_remark: string;
  @Column({ comment: '付款状态(10未付款 20已付款)', nullable: true })
  pay_status: number = 10;
  @Column({ comment: '付款时间', nullable: true }) pay_time: Date;
  @Column({ comment: '运费金额', nullable: true }) express_price: number = 0;
  @Column({ comment: '', nullable: true }) express_company: string;
  @Column({ comment: '', nullable: true }) express_no: string;
  @Column({ comment: '发货状态(10未发货 20已发货)', nullable: true })
  delivery_status: number = 10;
  @Column({ comment: '', nullable: true }) delivery_time: Date;
  @Column({ comment: '收货状态(10未收货 20已收货)', nullable: true })
  receipt_status: number = 10;
  @Column({ comment: '收货时间', nullable: true }) receipt_time: Date;
  @Column({ comment: '订单状态(10进行中 20取消 30已完成)', nullable: true })
  order_status: number = 10;
  @Column({ comment: '微信支付交易号', nullable: true }) transaction_id: string;
  @Column({ comment: '是否已评价(0否 1是)', nullable: true })
  is_comment: boolean = false;
  @Column({ comment: '订单分类：拼团，秒杀，抢购', nullable: true })
  prom_type: number;
  @Column({ comment: '参团人数', nullable: true }) prom_num: number = 0;
  @Column({ comment: '拼团状态：1为待拼团2位成功', nullable: true })
  prom_statis: number = 1;
  @Column({ comment: '拼团限时', nullable: true }) prom_time: Date;
  @Column({ comment: '折扣', nullable: true }) rebate: string;
  @Column({ comment: '商品id', nullable: true }) item_id: number;
  @Column({ comment: '结束时间', nullable: true }) end_time: Date;
  @Column({ comment: '积分', nullable: true }) give_integral: number = 0;
  @Column({ comment: '售后状态10为申请20为已处理', nullable: true })
  sub_status: number;
  @Column({ comment: '售后方式1为退款2为换货', nullable: true })
  sub_type: number;

  @Column({ comment: '创建时间', nullable: true })
  create_time: Date = new Date();

  @Column({ comment: '更新时间', nullable: true })
  update_time: Date = new Date();

  @Column({ comment: '用户id' }) user_id: number;
  @Column({ comment: '小程序id' }) app_id: string;
}
