import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';
const { KAFKA_PASSWORD, KAFKA_USER, KAFKA_BROKER } = process.env;

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: [KAFKA_BROKER || ''],
        sasl: {
          mechanism: 'scram-sha-256',
          username: KAFKA_USER || '',
          password: KAFKA_PASSWORD || '',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
