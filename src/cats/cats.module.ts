import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { AppModule } from 'src/app.module';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService], //외부에서 사용할 수 있도록 내보내기
})
export class CatsModule {}
