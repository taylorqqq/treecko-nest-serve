import { Controller, Get } from '@nestjs/common'
import { ConfigService } from '../config/config.service'

@Controller('article') // 装饰器 @Controller() 用于标识一个控制器
export class ArticleController {
  constructor(private readonly config: ConfigService) {}
  @Get() // 装饰器 @Get() 用于标识一个路由
  get(): any {
    // 路由处理函数
    return this.config.getConfig('database.host')
  }
}
