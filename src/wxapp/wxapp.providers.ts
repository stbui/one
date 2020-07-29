import { Connection } from 'typeorm';
import { DB_CON_TOKEN } from '../common/database/database.constants';
import { WxappEntity } from './wxapp.entity';
import { WXAPP_TOKEN } from './wxapp.constants';

export const WxappProviders = [
  {
    provide: WXAPP_TOKEN,
    useFactory: (connection: Connection) =>
      connection.getRepository(WxappEntity),
    inject: [DB_CON_TOKEN],
  },
];
