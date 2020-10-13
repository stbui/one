import { Controller, Get } from '@stbui/one-common';

@Controller('/custom')
export class CustomController {
    constructor() {}

    @Get('/monitor')
    monitor(req, res) {
        return { message: 'CustomMonitor' };
    }

    @Get('/available')
    available(req, res) {
        return { message: 'CustomMonitor' };
    }
}
