import { Controller, Get } from '@stbui/one-common';

@Controller('/home')
export class Home {
    constructor() {}

    @Get()
    index() {
        console.log('home');
        return { message: 'home' };
    }

    @Get('/test')
    test(req, res) {
        console.log('test');
        return { message: 'test' };
    }
}
