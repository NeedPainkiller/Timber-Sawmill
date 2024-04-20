import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize';
import { AuditLog } from '../audit/audit.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    inject: [ConfigService], // ConfigService 주입
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: configService.get<Dialect>('database.dialect'),
        define: {
          engine: 'ARCHIVE'
        },
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        database: configService.get<string>('database.name'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
      });
      sequelize.addModels([AuditLog]);
      await sequelize.sync({force: false})
      .then(() => {
        console.log('Database sync');
      }).catch((err) => {
        console.log('Database sync error:', err);
      });
      return sequelize;
    },
  },
];
