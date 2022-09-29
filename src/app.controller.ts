import { CatsService } from './cats/cats.service';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catService: CatsService,
  ) {}

  @Get()
  getHello() {
    return this.catService.hiCatServiceProduct();
  }
}
