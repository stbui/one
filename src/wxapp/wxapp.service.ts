import {
  Injectable,
  Inject,
  UnprocessableEntityException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { DeleteResult, Repository, DeepPartial } from 'typeorm';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { FindConditions } from 'typeorm/find-options/FindConditions';
import { WxappEntity } from './wxapp.entity';
import { WXAPP_TOKEN } from './wxapp.constants';
import { Config } from '../config/config';

@Injectable()
export class WxappService {
  constructor(
    @Inject(WXAPP_TOKEN)
    protected readonly repository: Repository<WxappEntity>,
  ) {}

  public async findAll(): Promise<any[]> {
    return await this.repository.find();
  }

  public async findOneById(id: number): Promise<any> {
    return this.repository.findOneOrFail(id);
  }

  public async findOne(
    conditions?: FindConditions<WxappEntity>,
    options?: FindOneOptions<WxappEntity>,
  ): Promise<WxappEntity> {
    return this.repository.findOne(conditions, options);
  }

  public async find(options?): Promise<any> {
    return this.repository.find(options);
  }

  public async create(data: DeepPartial<WxappEntity>): Promise<WxappEntity> {
    const entity: any = this.repository.create(data);
    await this.validate(entity);
    return entity.save();
  }

  public async update(criteria, partialEntity): Promise<any> {
    return this.repository.update(criteria, partialEntity);
  }

  public async patch(id: number, data: DeepPartial<any>): Promise<any> {
    const entity: any = await this.findOneById(id);
    Object.assign(entity, data);
    await this.validate(entity);
    return entity.save();
  }

  public async delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }

  private async validate(entity: any) {
    const errors = await validate(entity, Config.validator);
    if (errors.length) {
      throw new UnprocessableEntityException(errors);
    }
  }
}
