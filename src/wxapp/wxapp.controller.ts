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
import { LayoutInterceptor } from '../layout/layout.interceptor';
import { WxappService } from './wxapp.service';

@UseInterceptors(LayoutInterceptor)
@Controller('wxapp')
export class WxappController {
  constructor(protected service: WxappService) {}

  @Get('index')
  @Render('app/index.html')
  async index() {}

  @Get('list')
  @Render('app/list.html')
  async list() {}

  @Get('edit')
  @Render('app/edit.html')
  async edit() {}

  @Get('setting')
  @Render('app/setting.html')
  async setting() {}

  @Get('page/index')
  @Render('app/page/index.html')
  async page() {}
  
  @Get('page/edit')
  @Render('app/page/edit.html')
  async pageEdit() {}
}
