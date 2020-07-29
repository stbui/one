import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsString } from 'class-validator';

@Entity()
export class CrawlerEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'id' }) category_id: string;

    @Column() mobile: number;
    @Column() token: string;
}
