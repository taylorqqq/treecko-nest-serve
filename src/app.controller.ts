import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service' // 1.从容器中获取服务 2.提供类型支持

@Controller() // 装饰器 @Controller() 用于标识一个控制器
export class AppController {
  constructor(private readonly appService: AppService) {} // 依赖注入

  @Get() // 装饰器 @Get() 用于标识一个路由
  getHello(): string {
    // 路由处理函数
    return this.appService.getHello()
  }
}
