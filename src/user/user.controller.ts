import {
  Controller,
  Get,
  Render,
  Param,
  ParseIntPipe,
  Post,
  Body,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiUseTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { LayoutInterceptor } from '../layout/layout.interceptor';
import { UserService } from './user.service';
import { CrudController } from '../common/crud/crud.controller';
import { UserEntity } from './user.entity';

@ApiUseTags('user')
@Controller('user')
export class UserController extends CrudController<UserEntity> {
  constructor(protected service: UserService) {
    super();
  }

  @Get('index')
  @UseInterceptors(LayoutInterceptor)
  @Render('user/index.html')
  async root() {
    const data = await this.service.findAll();
    return { list: data };
  }
}
