import { Connection } from 'typeorm';
import { DB_CON_TOKEN } from '../common/database/database.constants';
import { WebUserEntity } from './web-user.entity';
import { WEB_USER_TOKEN } from './web-user.constants';

export const UserProviders = [
  {
    provide: WEB_USER_TOKEN,
    useFactory: (connection: Connection) =>
      connection.getRepository(WebUserEntity),
    inject: [DB_CON_TOKEN],
  },
];
