"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const core_1 = require("./core");
const app_1 = require("./controller/app");
const home_1 = require("./controller/home");
const custom_1 = require("./controller/custom");
function bootstrap() {
    const controllers = [app_1.App, home_1.Home, custom_1.CustomAvailable, custom_1.CustomMonitor];
    const app = core_1.Runner.run(controllers);
    app.listen(config_1.PORT);
    console.log(`Server running on http://${config_1.IP}:${config_1.PORT}`);
}
bootstrap();
//# sourceMappingURL=index.js.map