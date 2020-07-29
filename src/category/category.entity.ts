import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {
  IsArray,
  IsEmail,
  IsString,
  MinLength,
  Validate,
  IsEmpty,
} from 'class-validator';

@Entity()
export class CategoryEntity extends BaseEntity {
  // 商品分类id
  @PrimaryGeneratedColumn({ name: 'id' }) category_id: string;
  // 商品分类名称
  @IsString() @Column() name: string;
  // 父id
  @Column({ name: 'pid' }) parent_id: number;
  // 分类图片
  @Column({ nullable: true }) image: string;
  // 排序方式(数字越小越靠前)
  @Column() sort: number;
  @Column({ nullable: true, comment: '小程序id' }) app_id: number;
  @Column({
    nullable: true,
    default: +new Date(),
    readonly: true,
    comment: '创建时间',
  })
  create_time: number;
  @Column({ nullable: true, comment: '更新时间' })
  update_time: string;
}
