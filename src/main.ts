import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { kafkaConfig } from './config/config.kafka';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  await kafkaConfig(app)
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
