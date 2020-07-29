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
import { SettingService } from './setting.service';

@UseInterceptors(LayoutInterceptor)
@Controller('setting')
export class SettingController {
  constructor(protected service: SettingService) {}

  @Get()
  @Render('setting/store.html')
  async root() {
    const data = await this.service.findOne({ key: 'store' });

    return { values: { store: { values: data.values } } };
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async update(@Body() body) {
    console.log(body);
    const data = await this.service.update(
      { key: 'store' },
      {
        values: body.store,
      },
    );

    return { msg: '更新成功', code: 1 };
  }

  // @Get('store')
  // @Render('setting/store.html')
  // async store() {
  //   const data = await this.service.findOne({ key: 'store' });
  //   return { values: data.values };
  // }

  // @Post('store')
  // @Render('setting/store.html')
  // @UseInterceptors(FileInterceptor('file'))
  // async updateStore(@Body() body) {
  //   const data = await this.service.update(
  //     { key: 'store' },
  //     {
  //       values: body,
  //     },
  //   );

  //   return { msg: '更新成功', code: 1 };
  // }

  @Get('trade')
  @Render('setting/trade.html')
  async trade() {
    const data = await this.service.findOne({ key: 'trade' });
    return { values: data.values };
  }

  @Post('trade')
  @UseInterceptors(FileInterceptor('file'))
  async updateTrade(@Body() body) {
    const data = await this.service.update(
      { key: 'trade' },
      {
        values: body.trade,
      },
    );

    return { msg: '更新成功', code: 1, data };
  }

  @Get('sms')
  @Render('setting/sms.html')
  async sms() {
    const data = await this.service.findOne({ key: 'sms' });
    return { values: data.values };
  }

  @Post('sms')
  @UseInterceptors(FileInterceptor('file'))
  async updateSms(@Body() body) {
    console.log(body);
    const data = await this.service.update(
      { key: 'sms' },
      {
        values: body.sms,
      },
    );

    return { msg: '更新成功', code: 1, data };
  }

  @Get('storage')
  @Render('setting/storage.html')
  async storage() {
    const data = await this.service.findOne({ key: 'storage' });
    return { values: data.values };
  }

  @Post('storage')
  @UseInterceptors(FileInterceptor('file'))
  async updateStorage(@Body() body) {
    console.log(body);
    const data = await this.service.update(
      { key: 'storage' },
      {
        values: body.storage,
      },
    );

    return { msg: '更新成功', code: 1, data };
  }

  @Get('install')
  install() {
    const data = [
      {
        key: 'store',
        describe: '商城设置',
        values: { name: '时间加速器' },
        app_id: 10001,
      },
      {
        key: 'trade',
        describe: '交易设置',
        values: {},
        app_id: 10001,
      },
      {
        key: 'sms',
        describe: '短信通知',
        values: {},
        app_id: 10001,
      },
      {
        key: 'tplMsg',
        describe: '模板消息',
        values: {},
        app_id: 10001,
      },
      {
        key: 'storage',
        describe: '上传设置',
        values: {},
        app_id: 10001,
      },
      {
        key: 'basic',
        describe: '基础设置',
        values: {},
        app_id: 10001,
      },
      {
        key: 'commission',
        describe: '佣金设置',
        values: {},
        app_id: 10001,
      },
      {
        key: 'settlement',
        describe: '结算',
        values: {},
        app_id: 10001,
      },
      {
        key: 'words',
        describe: '自定义文字',
        values: {},
        app_id: 10001,
      },
      {
        key: 'template_msg',
        describe: '模板消息',
        values: {},
        app_id: 10001,
      },
      {
        key: 'background',
        describe: '页面背景图',
        values: {},
        app_id: 10001,
      },
      {
        key: 'qrcode',
        describe: '分销海报',
        values: {},
        app_id: 10001,
      },
    ];

    data.forEach(d => this.service.create(d));

    return {};
  }
}
