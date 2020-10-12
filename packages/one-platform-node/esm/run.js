import "reflect-metadata";
import * as express from "express";
const app = express();
export class Runner {
    static run(controllers) {
        // 健康检查
        app.get("/health", (req, res) => res.status(200).send("OK"));
        // 路由的实现
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
        return app;
    }
}
