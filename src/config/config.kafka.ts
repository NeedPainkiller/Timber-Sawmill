import { Transport } from '@nestjs/microservices';
import { ConfigService,ConfigType } from '@nestjs/config';
import { INestApplication } from '@nestjs/common';

export function kafkaConfig(app : INestApplication<any>) {
  const configService = app.get(ConfigService);
  const kafkaId = configService.get<string>('kafka.id');
  const kafkaBrokers = configService.get<string>('kafka.brokers').split(',');
  const kafkaGroupId = configService.get<string>('kafka.groupId');

  console.log('kafkaId:', kafkaId);
  console.log('kafkaBrokers:', kafkaBrokers);
  console.log('kafkaGroupId:', kafkaGroupId);
  
  const kafkaConfigWithBrokers = {
    options: {
      client:{
        id: kafkaId,
        brokers: kafkaBrokers,
        groupId: kafkaGroupId
      },
      consumer:{
        groupId: kafkaGroupId
      }
    },
  };

  app.connectMicroservice(
    {
      transport: Transport.KAFKA,
      ...kafkaConfigWithBrokers
    }
  )
}
