import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RegionEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'id' }) id: number;
  @Column({ comment: '父id' }) pid: number;
  @Column({ nullable: true, comment: '简称' }) shortname: string;
  @Column({ nullable: true, comment: '名称' }) name: string;
  @Column({ nullable: true, comment: '全称' }) merger_name: string;
  @Column({ nullable: true, comment: '层级 1 2 3 省市区县' }) level: number;
  @Column({ nullable: true, comment: '拼音' }) pinyin: string;
  @Column({ nullable: true, comment: '长途区号' }) code: string;
  @Column({ nullable: true, comment: '邮编' }) zip_code: string;
  @Column({ nullable: true, comment: '首字母' }) first: string;
  @Column({ nullable: true, comment: '经度' }) lng: string;
  @Column({ nullable: true, comment: '纬度' }) lat: string;
}
