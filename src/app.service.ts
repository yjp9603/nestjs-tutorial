import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  //code
  getHello(): string {
    return 'Hello World!';
  }
}
