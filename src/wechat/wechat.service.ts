import { Injectable, Inject, HttpService } from '@nestjs/common';
import { WeChatConfigProvider } from './wechat.constants';
import { WechatConfig } from './wechat.interface';
import { XmlService } from '../common/services';

@Injectable()
export class WechatService {
  protected readonly apiBase = 'https://api.mch.weixin.qq.com';
  protected readonly unifiedOrderUrl = `${this.apiBase}/pay/unifiedorder`;

  constructor(
    @Inject(WeChatConfigProvider) private readonly config: WechatConfig,
    private readonly httpServer: HttpService,
    private readonly xmlService: XmlService,
  ) {}

  async unifiedorder(params: any): Promise<any> {
    const { data } = await this.httpServer
      .post(this.unifiedOrderUrl, this.xmlService.convertObjToXml(params))
      .toPromise();

    return this.xmlService.parseObjFromXml(data);

    // return {
    //   return_code: 'SUCCESS',
    //   return_msg: '',
    //   appid: 1,
    //   mch_id: 'mch_id',
    //   device_info: 'device_info',
    //   nonce_str: 'nonce_str',
    //   sign: 'sign',
    // };
  }
}
