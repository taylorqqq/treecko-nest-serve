import { Module } from '@nestjs/common';
import * as path from 'path';
import { config } from 'dotenv';
import { developmentConfig } from './config/development.config';
import { productionConfig } from './config/production.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HdService } from './hd.service';
import { ConfigService } from './config.service';
import { DbService } from './db.service';

config({
  path: path.join(__dirname, '../.env'),
});

// 装饰器 @Module() 用于标识一个模块
// 完整的模块定义应该包含 imports、controllers、providers、exports 四个属性
@Module({
  imports: [], // 导入模块
  controllers: [AppController], // 注册控制器
  // providers: [AppService, HdService], // 注册服务
  // providers 完整写法：
  providers: [
    {
      provide: 'APP_SERVICE', // 服务标识
      useClass: AppService, // 服务类
    },
    HdService,
    {
      provide: 'APP_NAME', // 服务标识
      useValue: 'Hello Nest!', // 服务值
    },
    {
      provide: 'APP_CONFIG', // 服务标识
      useValue:
        process.env.NODE_ENV === 'development'
          ? developmentConfig
          : productionConfig, // 服务值
    },
    ConfigService,
    {
      provide: 'DB_SERVICE', // 服务标识
      inject: ['CONFIG_SERVICE'], // 依赖注入
      useFactory: (config) => {
        return new DbService(config);
      },
    },
  ],
  // exports: [], // 导出服务
})
export class AppModule {}
