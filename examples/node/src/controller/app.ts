import { Controller, Get } from '@stbui/one-common';

@Controller()
export class App {
    constructor() {}

    @Get()
    index() {
        console.log('default');
        return { message: 'default' };
    }
}
