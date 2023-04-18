import { Controller, Get, Inject } from '@nestjs/common'
import { AppService } from './app.service' // 1.从容器中获取服务 2.提供类型支持
import { ConfigService, ConfigType } from '@nestjs/config'
import databaseConfig from './config/database.config'

@Controller() // 装饰器 @Controller() 用于标识一个控制器
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly config: ConfigService,
    @Inject(databaseConfig.KEY) private readonly database: ConfigType<typeof databaseConfig>,
  ) {} // 依赖注入

  @Get() // 装饰器 @Get() 用于标识一个路由
  getHello(): any {
    // 路由处理函数
    // return this.appService.getHello()
    // return this.config.get('APP_NAME')
    // 读取配置
    // return this.config.get('upload.exts')
    // 命名空间读取配置
    return this.database.host
  }
}
