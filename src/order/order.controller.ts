import {
    Controller,
    Get,
    Render,
    Param,
    Post,
    Body,
    Put,
    Delete,
    UseInterceptors,
    Query,
} from '@nestjs/common';
import { ApiUseTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { LayoutInterceptor } from '../layout/layout.interceptor';
import { CrudController } from '../common/crud/crud.controller';
import { OrderService } from './order.service';
import { WechatService } from '../wechat/wechat.service';
import { OrderEntity } from './order.entity';
@ApiUseTags('order')
@Controller('order')
export class OrderController extends CrudController<OrderEntity> {
    constructor(
        protected service: OrderService,
        protected wechatService: WechatService,
    ) {
        super();
    }

    @Get('index')
    @ApiOperation({ title: '前端页面' })
    @Render('order/index.html')
    @UseInterceptors(LayoutInterceptor)
    async root() {
        const data = await this.service.findAll();
        return { list: data };
    }

    // ---
    @Post('buyNow')
    @ApiOperation({ title: '订单确认-立即购买' })
    async buyNow(@Body() body) {
        // 商品结算信息
        const order = await this.service.getBuyNow(
            { user_id: 1, open_id: 1, app_id: 1 },
            body.store_id,
            body.store_num,
            body.store_sku_id,
        );
        // 创建订单
        this.service.createOrder(
            1,
            order,
            body.coupon_id,
            body.remark,
            body.prom,
            body.item_id,
            body.other,
        );
        // 发起微信支付
        const unifiedorder = await this.unifiedorder(order, {});
        return { payment: unifiedorder, order_id: 'order_id' };
    }

    @Post('cart')
    @ApiOperation({ title: '订单确认-购物车结算' })
    cart(@Body() entity) {
        // 商品结算信息
        // 创建订单
        // 移出购物车中已下单的商品
        // 发起微信支付
    }

    // 立即支付
    @Post('pay')
    @ApiOperation({ title: '立即支付' })
    pay(@Body() entity) {
        // 订单详情
        // 判断商品状态、库存
        // 统一下单API
        // 记录prepay_id
    }

    @Get('detail')
    @ApiOperation({ title: '订单详情信息' })
    detail(@Query() q: any) {
        return this.service.getUserOrderDetail(q.order_id, 1);
    }

    @Get('express')
    @ApiOperation({ title: '获取物流信息' })
    async express(@Query() q: any) {
        const order = await this.service.getUserOrderDetail(q.order_id, 1);
        if (!order.express_no) {
            return { code: 0, msg: '没有物流信息' };
        }
        // 获取物流信息
        return {};
    }

    @Get('cancel')
    @ApiOperation({ title: '取消订单' })
    cancel(@Query() q: any) {
        return this.service.cancel(q.order_id);
    }

    @Get('receipt')
    @ApiOperation({ title: '确认收货' })
    receipt(@Query() q: any) {
        return this.service.receipt(q.order_id);
    }

    // 构建微信支付
    private unifiedorder(order, user) {
        // 统一下单API
        const data = this.wechatService.unifiedorder({
            body: '支付一下',
            out_trade_no: order.order_no,
            total_fee: order.pay_price,
            spbill_create_ip: '127.0.0.1', // 支付请求方IP
            notify_url: 'your.domain.com/payment/wechat_order_notify', // 服务端支付通知地址
            trade_type: 'JSAPI',
        });
        // 记录prepay_id
        return data;
    }

    // ---
    @Get(':id')
    findfindByIdOne(@Param('id') id: number) {
        return this.service.findOneById(id);
    }

    @Post()
    @ApiOperation({ title: '创建订单' })
    create(@Body() entity) {
        return this.service.create(entity);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() entity) {
        return this.service.patch(id, entity);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.service.delete(id);
    }
}
