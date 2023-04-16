import { Inject, Injectable } from '@nestjs/common';
import { HdService } from './hd.service';
import { AppConfig } from './types/appConfig';

@Injectable() // 装饰器 @Injectable() 用于标识一个类可以被依赖注入 如果没有
export class AppService {
  constructor(
    private readonly hdService: HdService,
    @Inject('CONFIG_SERVICE') private readonly configService: AppConfig,
  ) {} // 依赖注入
  getHello(): string {
    // return 'Hello World!';
    // return this.hdService.getHd();
    return `<h1 style="background-color:red;color:#fff;padding:10px">${this.configService.host}:${this.configService.port}</h1>`;
  }
}
