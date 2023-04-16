import { Injectable } from '@nestjs/common';

@Injectable()
export class HdService {
  getHd(): string {
    return 'Hd!';
  }
}
