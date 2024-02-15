import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { UserFactoryService } from './user-factory-service';
import { UsersUseCases } from './user.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [UserFactoryService, UsersUseCases],
  exports: [UserFactoryService, UsersUseCases],
})
export class UserUseCasesModule {}
