import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CrawlerEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'id' }) id: string;

    @Column() mobile: number;
    @Column() token: string;
}
