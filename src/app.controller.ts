import { Controller, Get, Render, Post, UseInterceptors } from '@nestjs/common';
import { LayoutInterceptor } from './layout/layout.interceptor';

@Controller()
export class AppController {
  @Get()
  @Render('index/index.html')
  @UseInterceptors(LayoutInterceptor)
  app() {
    return {};
  }

  @Get('login')
  @Render('login/login.html')
  root() {
    return {};
  }

  @Post('login')
  login() {
    return { code: 1, msg: '登陆成功', url: '/store/index' };
  }
}
