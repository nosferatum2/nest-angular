import { Module } from '@nestjs/common';
import { PostgresDataServiceModule } from '../../frameworks/data-service/postgres/postgres-data-service.module';

@Module({
  imports: [PostgresDataServiceModule],
  exports: [PostgresDataServiceModule]
})
export class DataServicesModule {}
