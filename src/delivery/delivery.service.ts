import { Injectable, Inject } from '@nestjs/common';
import { Repository, DeepPartial } from 'typeorm';
import { CrudService } from '../common/crud/crud.service';
import { DeliverEntity, DeliverRuleEntity } from './delivery.entity';
import { DELIVERY_TOKEN, DELIVERY_RULE_TOKEN } from './deliver.constants';

@Injectable()
export class DeliveryService extends CrudService<DeliverEntity> {
    constructor(
        @Inject(DELIVERY_TOKEN)
        protected readonly repository: Repository<DeliverEntity>,
        @Inject(DELIVERY_RULE_TOKEN)
        protected readonly repositoryRule: Repository<DeliverRuleEntity>,
    ) {
        super();
    }

    public async createRule(data: DeepPartial<any>): Promise<any> {
        const entity: any = this.repositoryRule.create(data);
        await this.validate(entity);
        return entity.save();
    }

    public async findRule(options?): Promise<any> {
        return this.repositoryRule.find(options);
    }
}
