import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';

import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import { StoreProviders } from './store.providers';
import { CategoryModule } from '../category/category.module';
import { LayoutService } from '../layout/layout.service';
import { DeliveryModule } from '../delivery/delivery.module';

@Module({
  imports: [DatabaseModule, forwardRef(() => CategoryModule), DeliveryModule],
  controllers: [StoreController],
  providers: [LayoutService, StoreService, ...StoreProviders],
  exports: [StoreService]
})
export class StoreModule { }
