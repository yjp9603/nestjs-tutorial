import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { AppModule } from 'src/app.module';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService], //
})
export class CatsModule {}
