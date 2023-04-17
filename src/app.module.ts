import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from './config/config.module'

// 装饰器 @Module() 用于标识一个模块
// 完整的模块定义应该包含 imports、controllers、providers、exports 四个属性
@Module({
  imports: [ConfigModule], // 导入模块
  controllers: [AppController], // 注册控制器
  providers: [AppService], // 注册服务
  // exports: [], // 导出服务
})
export class AppModule {}
