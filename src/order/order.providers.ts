import { Connection } from 'typeorm';
import { DB_CON_TOKEN } from '../common/database/database.constants';
import { OrderEntity } from './order.entity';
import { ORDER_TOKEN } from './order.constants';

export const OrderProviders = [
  {
    provide: ORDER_TOKEN,
    useFactory: (connection: Connection) =>
      connection.getRepository(OrderEntity),
    inject: [DB_CON_TOKEN],
  },
];
