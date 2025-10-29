import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! test 29/10/2025 12:28 pm';
  }
}
