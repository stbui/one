import { Runner } from '@stbui/one-platform-node';
import { IP, PORT } from './config';
import { App } from './controller/app';
import { Home } from './controller/home';
import { CustomController } from './controller/custom';

function bootstrap() {
    const controllers = [App, Home, CustomController];

    const app = Runner.run(controllers);
    app.listen(PORT);
    console.log(`Server running on http://${IP}:${PORT}`);
}

bootstrap();
