import "reflect-metadata";
import express from "express";
const app = express();
const port = Number(process.env.PORT) || 8080;
export class Runner {
    static run(controllers) {
        app.get("/health", (req, res) => res.status(200).send("OK"));
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
        app.listen(port, () => {
            console.log(`Started proxy on http://127.0.0.1:${port}`);
        });
    }
}
//# sourceMappingURL=run.js.map