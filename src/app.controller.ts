import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service'; // 1.从容器中获取服务 2.提供类型支持
import { AppConfig } from './types/appConfig';
import { DbService } from './db.service';

@Controller() // 装饰器 @Controller() 用于标识一个控制器
export class AppController {
  constructor(
    @Inject('APP_SERVICE') // 装饰器 @Inject() 用于标识一个依赖
    private readonly appService: AppService, // 依赖注入
    @Inject('APP_NAME') private readonly appName: string, // 依赖注入
    @Inject('APP_CONFIG') private readonly appConfig: AppConfig, // 依赖注入
    @Inject('DB_SERVICE')
    private readonly dbService: DbService,
  ) {} // 依赖注入
  // constructor(private readonly appService: AppService) {} // 依赖注入

  @Get() // 装饰器 @Get() 用于标识一个路由
  getHello(): string {
    // 路由处理函数
    // return this.appService.getHello();
    // return this.appName;
    // return this.appConfig.host;
    return `<h1 style="background-color:red;color:#fff;padding:10px">
      ${this.dbService.connect()} 
    </h1>`;
  }
}
