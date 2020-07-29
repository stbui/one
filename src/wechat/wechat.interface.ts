export interface Wechat {}

export interface WechatConfig {
  /** 公众账号APPID或应用APPID */
  appid: string;
  /** 微信支付商户号 */
  mch_id: string;
  /** 微信支付交易秘钥 */
  secretKey: string;
  /** 商户证书，请使用 fs.readFileSync() 方法读取 */
  // pfx: Buffer;
  /** 微信支付签名类型，默认MD5 */
  sign_type?: 'MD5' | 'HMAC-SHA256';
  /** 微信支付启用沙箱环境，默认false */
  sandbox?: boolean;
}
