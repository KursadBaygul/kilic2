import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // AppService'i inject ediyoruz
  constructor(private readonly appService: AppService) {}

  // Ana rota için GET isteği tanımlanıyor
  @Get()
  getHome(): string {
    return 's';  // AppService'deki getHello metodunu çağırıyoruz
  }
}
