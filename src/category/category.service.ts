import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CrudService } from '../common/crud/crud.service';

import { CategoryEntity } from './category.entity';
import { CATEGORY_TOKEN } from './category.constants';

@Injectable()
export class CategoryService extends CrudService<CategoryEntity> {
    constructor(
        @Inject(CATEGORY_TOKEN)
        protected readonly repository: Repository<CategoryEntity>,
    ) {
        super();
    }
}
