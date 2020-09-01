import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import next from 'next/dist/server/next';

@Module({
  imports: [
    RenderModule.forRootAsync(
      next({ dev: process.env.NODE_ENV !== 'production' }),
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
