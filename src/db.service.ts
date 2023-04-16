import { Injectable } from '@nestjs/common';

@Injectable()
export class DbService {
  constructor(private readonly options: Record<string, any>) {}

  public connect() {
    return `db connected ${this.options.host}:${this.options.port}`;
  }
}
