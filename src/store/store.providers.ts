import { Connection } from 'typeorm';
import { DB_CON_TOKEN } from '../common/database/database.constants';
import { StoreEntity } from './store.entity';
import { STORE_TOKEN } from './store.constants';

export const StoreProviders = [
  {
    provide: STORE_TOKEN,
    useFactory: (connection: Connection) =>
      connection.getRepository(StoreEntity),
    inject: [DB_CON_TOKEN],
  },
];
