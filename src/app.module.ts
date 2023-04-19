import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import appConfig from './config'
import { APP_PIPE } from '@nestjs/core'
import { HdPipe } from './hd/hd.pipe'

// 装饰器 @Module() 用于标识一个模块
// 完整的模块定义应该包含 imports、controllers、providers、exports 四个属性
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 全局配置
      load: [...appConfig], // 加载配置 会和.env文件合并
    }),
  ], // 导入模块
  controllers: [AppController], // 注册控制器
  providers: [
    AppService,
    // 管道HdPipe对整个模块进行处理
    // {
    //   provide: APP_PIPE,
    //   useClass: HdPipe,
    // },
  ], // 注册服务
  // exports: [], // 导出服务
})
export class AppModule {}
