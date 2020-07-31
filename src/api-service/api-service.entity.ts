import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class apiServiceEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'id' }) serviceId: string;

    @Column() serviceName: string;
    @Column({ nullable: true }) serviceDesc: string;
    @Column() apiName: string;
    @Column({ nullable: true }) apiDesc: string;

    @Column() requestConfig: string;
    @Column() requestParameters: string;
    @Column() serviceType: string;
    @Column() serviceTimeout: number;
    @Column() serviceConfig: string;
    @Column() serviceParameters: string;
    @Column() constantParameters: string;
    @Column() responseType: string;

    @Column({
        nullable: true,
        default: +new Date(),
        readonly: true,
        comment: '创建时间',
    })
    create_time: number;

    @Column({ nullable: true, comment: '更新时间' }) update_time: string;
}
