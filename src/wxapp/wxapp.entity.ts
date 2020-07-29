import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// 微信小程序记录
@Entity()
export class WxappEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: '小程序id', name: 'id' }) app_id: number;
  @Column({ comment: '小程序名称', nullable: true }) app_name: string;
  @Column({ comment: '小程序AppID', nullable: true }) appkey: string;
  @Column({ comment: '小程序AppSecret', nullable: true }) app_secret: string;
  @Column({ comment: '微信商户号id', nullable: true }) mchid: string;
  @Column({ comment: '微信支付密钥', nullable: true }) apikey: string;
  @Column({ comment: '是否删除0为删除', nullable: true }) is_delete: string;
  @Column({ comment: 'ver', nullable: true }) ver: string;
  @Column({ comment: '图片地址', nullable: true }) image_id: string;
  @Column({ comment: '分类页样式', nullable: true }) category_style: string;
  @Column({ comment: '分享标题', nullable: true }) share_title: string;
  @Column({ comment: '所属用户', nullable: true }) user_id: string;
  @Column({ comment: '商店色系2', nullable: true }) color2: string;
  @Column({ comment: '门店色调1', nullable: true }) color1: string;

  @Column({ comment: '创建时间', nullable: true })
  create_time: Date = new Date();
  @Column({ comment: '更新时间', nullable: true })
  update_time: Date = new Date();
}
