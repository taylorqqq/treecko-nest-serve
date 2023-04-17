import { Global, Module } from '@nestjs/common'
import { ConfigService } from './config.service'

@Global() // 全局模块
@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
