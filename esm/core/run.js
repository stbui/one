import "reflect-metadata";
import * as express from "express";
import { IP, PORT } from "./config";
import { G } from "./gateway";
const app = express();
export class Runner {
    static run(controllers) {
        app.get("/health", (req, res) => res.status(200).send("OK"));
        G(app);
        controllers.forEach((controller) => {
            const instance = new controller();
            const prefix = Reflect.getMetadata("prefix", controller);
            const routes = Reflect.getMetadata("routes", controller);
            routes.forEach((route) => {
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
        this.bootstrap();
    }
    static bootstrap() {
        app.listen(PORT, () => {
            console.log(`Started proxy on http://${IP}:${PORT}`);
        });
    }
}
//# sourceMappingURL=run.js.map