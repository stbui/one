"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Runner = void 0;
require("reflect-metadata");
const express = require("express");
const gateway_1 = require("./gateway");
const app = express();
class Runner {
    static run(controllers) {
        app.get("/health", (req, res) => res.status(200).send("OK"));
        gateway_1.G(app);
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
exports.Runner = Runner;
//# sourceMappingURL=run.js.map