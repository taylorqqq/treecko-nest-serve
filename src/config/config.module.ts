import { DynamicModule, Global, Module } from '@nestjs/common'
import { ConfigService } from './config.service'

@Global() // 全局模块
@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {
  static register(options: { path: string }): DynamicModule {
    return {
      // global: true, // 全局模块
      module: ConfigModule,
      providers: [
        // 1 定义一个配置项服务
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
        // 2 定义一个工厂函数，用于创建配置服务
        // {
        //   provide: ConfigService,
        //   useFactory: (options) => {
        //     return new ConfigService(options.path)
        //   },
        // },
      ],
    }
  }
}
