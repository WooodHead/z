import Jwt from './jwt';
import Mail from './mail';
import Uploads from './uploads';
import CacheManager from './cache';
/***************  wechat 模块  *********************/
import Server from './wechat/server';
import QrCode from './wechat/qr_code';
import Message from './wechat/message';
import WeChatRequest from './wechat/request';
import AccessToken from './wechat/access_token';

declare module 'egg' {
  // 拓展 egg 的 Application
  export interface Context {
    // 放置各类处理额外业务逻辑处理
    handlers: {
      jwt: Jwt;
      mail: Mail;
      uploads: Uploads;
      cache: CacheManager;
      wechat: {
        server: Server,
        qrCode: QrCode,
        message: Message,
        request: WeChatRequest
        accessToken: AccessToken,
      }
    }
  }
}
