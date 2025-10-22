import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! test 22/10/2025 6:28 pm';
  }
}
