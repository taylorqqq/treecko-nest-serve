import { Module } from '@nestjs/common'
import { ArticleController } from './article.controller'
import { ConfigModule } from '../config/config.module'

@Module({
  imports: [ConfigModule], // 导入模块后才能在控制器中使用 或 注册成全局模块
  controllers: [ArticleController],
})
export class ArticleModule {}
