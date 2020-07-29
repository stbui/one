import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { USER_TOKEN } from './user.constants';
import { CrudService } from '../common/crud/crud.service';

@Injectable()
export class UserService extends CrudService<UserEntity> {
  constructor(
    @Inject(USER_TOKEN)
    protected readonly repository: Repository<UserEntity>,
  ) {
    super();
  }
}
