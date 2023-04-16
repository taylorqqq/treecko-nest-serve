import { Injectable } from '@nestjs/common';
import { TestService } from '../test/test.service';

@Injectable()
export class HomeService {
  constructor(private readonly testService: TestService) {}
  getHome() {
    return this.testService.getTest();
  }
}
