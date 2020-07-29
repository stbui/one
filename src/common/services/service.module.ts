import { Module } from '@nestjs/common';

import { RandomService } from './random.service';
import { XmlService } from './xml.service';

@Module({
  providers: [RandomService, XmlService],
  exports: [RandomService, XmlService],
})
export class ServiceModule {}
