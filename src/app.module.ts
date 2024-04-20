import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuditController } from './audit/audit.contoller';
import { AuditService } from './audit/audit.service';

import kafkaEnv from './env/kafka.env';
import databaseEnv from './env/database.env';
import { databaseProviders } from './config/config.database';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: false,
    envFilePath: '.env',
    load: [kafkaEnv, databaseEnv]
  })],
  controllers: [AppController, AuditController],
  providers: [AppService, AuditService, ...databaseProviders],
  exports: [...databaseProviders]
})
export class AppModule { }
