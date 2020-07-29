import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';
import { LayoutService } from '../layout/layout.service';

import { DeliveryController } from './delivery.controller';
import { DeliveryService } from './delivery.service';
import { DeliveryProviders, DeliveryRuleProviders } from './delivery.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [DeliveryController],
  providers: [
    LayoutService,
    DeliveryService,
    ...DeliveryProviders,
    ...DeliveryRuleProviders,
  ],
  exports: [DeliveryService],
})
export class DeliveryModule {}
