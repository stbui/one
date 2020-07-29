import { Controller } from '@nestjs/common';
import { ApiUseTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiUseTags('web-user')
@Controller('web-user')
export class WebUserController {

}
