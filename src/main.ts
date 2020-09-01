import { NestFactory } from '@nestjs/core';
import { RenderModule } from 'nest-next';
import next from 'next/dist/server/next';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = next({
    dev: process.env.NODE_ENV !== 'production',
  });
  await app.prepare();

  const server = await NestFactory.create(AppModule);

  const renderer = server.get(RenderModule);
  renderer.register(server, app);

  await server.listen(3000);
}
bootstrap();
