import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';

@Module({
  providers: [TestService],
  exports: [TestService],
  controllers: [TestController], // 导出服务 暴露给其他模块使用 否则其他模块无法使用
})
export class TestModule {}
