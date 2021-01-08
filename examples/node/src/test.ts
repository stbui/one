import { Controller, Get, Module, Injectable } from '@stbui/one-common';
import { Factory } from '@stbui/one-core';

@Controller('/custom')
export class CustomController {
    constructor() {
        console.log('CustomController: constructor');
    }

    @Get('/custom1')
    monitor(req, res) {
        return { message: 'CustomController custom1' };
    }

    @Get('/custom2')
    available(req, res) {
        return { message: 'CustomController custom2' };
    }
}

@Controller()
export class AppController {
    constructor() {
        console.log('AppController: constructor');
    }

    @Get('/app1')
    monitor(req, res) {
        return { message: 'AppController app1' };
    }

    @Get('/app2')
    available(req, res) {
        return { message: 'AppController app2' };
    }
}
@Injectable()
export class AppService {
    constructor() {
        console.log('AppService: constructor');
    }
}

@Module({
    controllers: [AppController, CustomController],
    providers: [AppService],
})
class App {}

function bootstrap() {
    Factory.create(App);
}

bootstrap();
