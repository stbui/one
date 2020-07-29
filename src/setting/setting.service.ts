import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CrudService } from '../common/crud/crud.service';

import { SettingEntity } from './setting.entity';
import { SETTING_TOKEN } from './setting.constants';

@Injectable()
export class SettingService extends CrudService<SettingEntity> {
    constructor(
        @Inject(SETTING_TOKEN)
        protected readonly repository: Repository<SettingEntity>,
    ) {
        super();
    }
}
