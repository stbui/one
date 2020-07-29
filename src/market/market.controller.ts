import {
  Controller,
  Get,
  Render,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { LayoutInterceptor } from '../layout/layout.interceptor';

@Controller('market')
export class MarketController {
  @Get('index')
  @UseInterceptors(LayoutInterceptor)
  @Render('market/coupon/index.html')
  indexPage() {}

  @Get('receive')
  @UseInterceptors(LayoutInterceptor)
  @Render('market/coupon/receive.html')
  receivePage() {}

  @Get('edit')
  @UseInterceptors(LayoutInterceptor)
  @Render('market/coupon/edit.html')
  editPage() {}
}
