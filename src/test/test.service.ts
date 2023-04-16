import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  getTest() {
    return 'test service method';
  }
}
