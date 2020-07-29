import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CrudService } from '../common/crud/crud.service';
import { OrderEntity } from './order.entity';
import { ORDER_TOKEN } from './order.constants';
import { StoreService } from '../store/store.service';

@Injectable()
export class OrderService extends CrudService<OrderEntity> {
    constructor(
        @Inject(ORDER_TOKEN)
        protected readonly repository: Repository<OrderEntity>,
        protected readonly storeService: StoreService,
    ) {
        super();
    }

    // ---
    /**
     * 订单确认-立即购买
     * @param user 当前用户
     * @param storeId 商品id
     * @param storeNum 商品数量
     * @param storeSkuId 商品库存
     */
    async getBuyNow(
        user: any,
        storeId: number,
        storeNum: number,
        storeSkuId: number,
    ) {
        // 商品信息
        const good = await this.storeService.findOneById(storeId);
        // 判断商品是否下架
        // 商品sku信息
        // 判断商品库存
        // 商品单价
        const price = 10;
        // 商品总价
        const totalPrice = price * storeNum;
        // 是拼团商品修改折扣价格
        // 商品总重量
        // 当前用户收货城市id
        // 是否存在收货地址
        // 验证用户收货地址是否存在运费规则中
        // 计算配送费用
        // 订单总金额 (含运费)
        // 当前商品是否参与优惠券
        // 可用优惠券列表
        return {
            goods_list: good,
            // 商品总数量
            order_total_num: storeNum,
            // 商品总金额 (不含运费)
            order_total_price: totalPrice,
            // 订单总金额 (含运费)
            order_pay_price: totalPrice,
            // 优惠券列表
            coupon_list: 1,
            agio_count: 1,
            // 默认地址
            address: 1,
            // 是否存在收货地址
            exist_address: 1,
            // 配送费用
            express_price: 1,
            // 当前用户收货城市是否存在配送规则中
            intra_region: 1,
            has_error: 1,
            error_msg: 1,
            prom: 1,
            other: 1,
        };
    }

    /**
     * 创建新订单
     * @param userId
     * @param order
     * @param coupon_id
     * @param remark
     * @param prom
     * @param item_id
     * @param other
     */
    createOrder(
        userId: number,
        order: any,
        coupon_id: number,
        remark,
        prom,
        item_id: number,
        other,
    ) {
        if (order.address === '') {
            // 请先选择收货地址
        }

        // 设置订单优惠券信息
        this.setCouponPrice(order, coupon_id);
        // 记录订单信息
        let prom_statis = 1;
        this.create({
            user_id: userId,
            app_id: 'ws',
            coupon_id: order.coupon_id,
            coupon_price: order.coupon_price,
            pay_price: order.pay_price,
            express_price: order.express_price,
            // vip_price:order.agio_coun,
            buyer_remark: remark,
            prom_type: prom,
            prom_statis: prom_statis,
            prom_num: 1,
            prom_time: 1,
            give_integral: 1,
            rebate: '',
            end_time: 1,
            item_id: item_id,
            total_price: order.order_total_price,
        });

        // 保存订单商品信息
        this.saveOrderGoods(userId, order);
        // 更新商品库存 (针对下单减库存的商品)
        this.updateGoodsStockNum(order.goods_list);
        // 记录收货地址
        this.saveOrderAddress(userId, order.address);
    }

    /**
     * 设置订单优惠券信息
     * @param order
     * @param coupon_id
     */
    setCouponPrice(order: any, coupon_id: number) {
        if (coupon_id > 0 && order.coupon_list !== '') {
            // 获取优惠券信息
            // 计算订单金额 (抵扣后)
            // 记录订单信息
            // 设置优惠券使用状态
        }
    }

    /**
     * 保存订单商品信息
     * @param user_id
     * @param order
     */
    saveOrderGoods(user_id: number, order: any) {
        // 订单商品列表
        // 订单商品实付款金额 (不包含运费)
        // 计算商品实际付款价
    }

    /**
     * 更新商品库存 (针对下单减库存的商品)
     * @param goods_list
     */
    updateGoodsStockNum(goods_list) {}

    /**
     * 记录收货地址
     * @param user_id
     * @param address
     */
    saveOrderAddress(user_id, address) {}

    // 用户中心订单列表
    getList() {}

    // 取消订单
    cancel(id: number) {
        return this.update({ order_id: id }, { order_status: 20 });
    }

    // 回退商品库存
    backGoodsStock() {}

    // 确认收货
    receipt(id: number) {
        return this.update({ order_id: id }, { receipt_status: 20 });
    }

    // 获取订单总数
    getCount() {
        return this.repository.count();
    }

    /**
     * 订单详情
     * @param userId
     */
    getUserOrderDetail(order_id: number, userId: number) {
        return { express_no: '' };
    }

    // 判断商品库存不足 (未付款订单)
    checkStatusFromOrder() {}

    // 待支付订单详情
    payDetail() {}

    // 订单支付成功业务处理
    paySuccess() {}

    // 更新付款状态
    updatePayStatus() {}

    // 付款状态
    getPayStatusAttr(value: number) {
        const status = { 10: '待付款', 20: '已付款' };
        return { text: status[value], value };
    }

    // 发货状态
    getDeliveryStatusAttr(value: number) {
        const status = { 10: '待发货', 20: '已发货' };
        return { text: status[value], value };
    }

    // 收货状态
    getReceiptStatusAttr(value: number) {
        const status = { 10: '待收货', 20: '已收货' };
        return { text: status[value], value };
    }

    // 收货状态
    getOrderStatusAttr(value: number) {
        const status = { 10: '进行中', 20: '取消', 30: '已完成' };
        return { text: status[value], value };
    }

    // 生成订单号
    orderNo() {
        return +new Date();
    }

    // 订单详情
    detail() {}

    // 分佣列表
    getGold() {}

    // 查询层级并计算分佣
    path() {}

    // 写入分佣日志以及追加用户余额
    apple() {}

    // 数据导出到excel(csv文件)
    export_excel() {}

    // 订单导出
    exportList() {}

    // 确认发货
    delivery(id: number) {
        return this.update({ order_id: id }, { delivery_status: 20 });
    }

    // 确认发货后发送消息通知
    deliveryMessage() {}

    // 确认发货
    batchDelivery() {}

    // 修改订单价格
    updatePrice(id: number, price: number) {
        return this.update({ order_id: id }, { update_price: price });
    }

    // 获取已付款订单总数 (可指定某天)
    getPayOrderTotal() {}

    // 获取订单总数量
    getOrderTotal() {}

    // 获取某天的总销售额
    getOrderTotalPrice() {}

    // 获取某天的下单用户数
    getPayOrderUserTotal() {}
}
