import { Injectable } from '@nestjs/common';

@Injectable()
export class LayoutService {
  getMenu() {
    return [
      {
        name: '首页',
        icon: 'mdi-home',
        url: '/index',
      },
      {
        name: '会员',
        icon: 'mdi-account',
        url: '/user/index',
      },
      {
        name: '商品',
        icon: 'mdi-gift',
        url: '/store/index',
        active: true,
      },
      {
        name: '订单',
        icon: 'mdi-clipboard-text',
        url: '/order/index',
      },
      {
        name: '营销',
        icon: 'mdi-dropbox',
        url: '/market/index',
      },
      {
        name: '应用',
        icon: 'mdi-bank',
        url: '/app/index',
      },
      {
        name: '模板',
        icon: 'mdi-camera',
        url: '/tpl/index',
      },
      {
        name: '权限',
        icon: 'mdi-clipboard-account',
        index: '/auth/index',
      },
    ];
  }
  // getMenu() {
  //   return [
  //     {
  //       name: '首页',
  //       icon: 'icon-home',
  //       index: 'index/index',
  //     },
  //     {
  //       name: '商品管理',
  //       icon: 'icon-goods',
  //       index: 'store',
  //       submenu: [
  //         {
  //           name: '商品列表',
  //           index: 'goods/index',
  //           uris: ['goods/index', 'goods/add', 'goods/edit'],
  //         },
  //         {
  //           name: '商品分类',
  //           index: 'goods.category/index',
  //           uris: [
  //             'goods.category/index',
  //             'goods.category/add',
  //             'goods.category/edit',
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       name: '订单管理',
  //       icon: 'icon-order',
  //       index: 'order',
  //       submenu: [
  //         { name: '待发货', index: 'order/delivery_list' },
  //         { name: '待收货', index: 'order/receipt_list' },
  //         { name: '待付款', index: 'order/pay_list' },
  //         { name: '已完成', index: 'order/complete_list' },
  //         { name: '已取消', index: 'order/cancel_list' },
  //         { name: '全部订单', index: 'order/all_list' },
  //       ],
  //     },
  //     {
  //       name: '用户管理',
  //       icon: 'icon-user',
  //       index: 'user',
  //     },
  //     {
  //       name: '小程序',
  //       icon: 'icon-wxapp',
  //       color: '#36b313',
  //       index: 'wxapp/setting',
  //       submenu: [
  //         { name: '小程序设置', index: 'wxapp/setting' },
  //         {
  //           name: '页面管理',
  //           index: 'wxapp/setting',
  //           active: true,
  //           submenu: [
  //             { name: '首页设计', index: 'wxapp.page/home' },
  //             { name: '页面链接', index: 'wxapp.page/links' },
  //           ],
  //         },
  //         {
  //           name: '帮助中心',
  //           index: 'wxapp.help/index',
  //           urls: [
  //             'wxapp.help/index',
  //             'wxapp.help/add',
  //             'wxapp.help/edit',
  //             'wxapp.help/delete',
  //           ],
  //         },
  //         { name: '导航设置', index: 'wxapp/tabbar' },
  //       ],
  //     },
  //     {
  //       name: '应用中心',
  //       icon: 'icon-application',
  //       index: 'order/delivery_list',
  //       is_svg: true,
  //     },
  //     {
  //       name: '设置',
  //       icon: 'icon-setting',
  //       index: 'setting/store',
  //       submenu: [
  //         { name: '商城设置', index: 'setting/store' },
  //         { name: '交易设置', index: 'setting/trade' },
  //         {
  //           name: '配送设置',
  //           index: 'setting.delivery/index',
  //           urls: [
  //             'setting.delivery/index',
  //             'setting.delivery/add',
  //             'setting.delivery/edit',
  //           ],
  //         },
  //         { name: '短信通知', index: 'setting/sms' },
  //         { name: '上传设置', index: 'setting/storage' },
  //         {
  //           name: '其他',
  //           active: true,
  //           submenu: [
  //             { name: '清理缓存', index: 'setting.cache/clear' },
  //             { name: '环境检测', index: 'setting.science/index' },
  //           ],
  //         },
  //       ],
  //     },
  //   ];
  // }

  getSetting() {
    return { store: { values: { name: '时间加工厂' } } };
  }
}
