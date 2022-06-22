import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalService } from './global/global.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, GlobalService],
})
export class AppModule {}
