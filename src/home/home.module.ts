import { Module } from '@nestjs/common';
import { TestModule } from 'src/test/test.module';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';

@Module({
  imports: [TestModule],
  providers: [HomeService],
  controllers: [HomeController],
})
export class HomeModule {}
