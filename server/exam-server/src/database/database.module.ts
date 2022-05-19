import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule.forRoot()],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                type: 'mysql',
                host: config.get('DB_HOST'),
                port: config.get('DB_PORT'),
                username: config.get('DB_USER'),
                password: config.get('DB_PASSWORD'),
                database: config.get('DB_DATABASE'),
                charset: config.get('DB_CHARSET'),
                synchronize: true,
                autoLoadEntities: true,
                logging: ['error'],
                logger: "file",
                retryAttempts: 3,
            })
          }),
    ]
})
export class DatabaseModule {}
