import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! test 31/3/2026 10:20 pm';
  }
}
