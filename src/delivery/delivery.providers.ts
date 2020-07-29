import { Connection } from 'typeorm';
import { DB_CON_TOKEN } from '../common/database/database.constants';
import { DeliverEntity, DeliverRuleEntity } from './delivery.entity';
import { DELIVERY_TOKEN, DELIVERY_RULE_TOKEN } from './deliver.constants';

export const DeliveryProviders = [
  {
    provide: DELIVERY_TOKEN,
    useFactory: (connection: Connection) =>
      connection.getRepository(DeliverEntity),
    inject: [DB_CON_TOKEN],
  },
];

export const DeliveryRuleProviders = [
  {
    provide: DELIVERY_RULE_TOKEN,
    useFactory: (connection: Connection) =>
      connection.getRepository(DeliverRuleEntity),
    inject: [DB_CON_TOKEN],
  },
];
