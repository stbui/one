import { Module, HttpModule } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';
import { apiServieProviders } from './api-service.privoiders';

@Module({
    imports: [HttpModule, DatabaseModule],
    controllers: [],
    providers: [...apiServieProviders],
})
export class ApiServiceModule {}
