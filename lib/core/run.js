"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Runner = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const static_1 = __importDefault(require("./static"));
const app = express_1.default();
const port = Number(process.env.PORT) || 8080;
class Runner {
    static run(controllers) {
        app.get('/health', (req, res) => res.status(200).send('OK'));
        controllers.forEach(controller => {
            const instance = new controller();
            const prefix = Reflect.getMetadata('prefix', controller);
            const routes = Reflect.getMetadata('routes', controller);
            routes.forEach(route => {
                app[route.requestMethod](prefix + route.path, (req, res) => {
                    const result = instance[route.methodName](req, res);
                    if (result) {
                        res.status(200).send(result);
                    }
                    else {
                        res.status(200).send();
                    }
                });
            });
        });
        static_1.default(app);
        this.bootstrap();
    }
    static bootstrap() {
        app.listen(port, () => {
            console.log(`Started za-proxy on port ${port}`);
        });
    }
}
exports.Runner = Runner;
//# sourceMappingURL=run.js.map