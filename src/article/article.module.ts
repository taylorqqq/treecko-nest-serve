import { Module } from '@nestjs/common'
import { ArticleController } from './article.controller'
import { ConfigModule } from '../config/config.module'

import path from 'path'

const configOptions = { path: path.resolve(__dirname, '../configure') }

@Module({
  imports: [ConfigModule.register(configOptions)], // 导入模块后才能在控制器中使用 或 注册成全局模块
  controllers: [ArticleController],
})
export class ArticleModule {}
