import { Connection } from 'typeorm';
import { DB_CON_TOKEN } from '../common/database/database.constants';
import { UserEntity } from './user.entity';
import { USER_TOKEN } from './user.constants';

export const UserProviders = [
  {
    provide: USER_TOKEN,
    useFactory: (connection: Connection) =>
      connection.getRepository(UserEntity),
    inject: [DB_CON_TOKEN],
  },
];
