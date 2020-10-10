import "reflect-metadata";
import * as express from "express";

import { RouteDefinition } from "./interfaces";

import { G } from "./gateway";

const app = express();

export class Runner {
  static run(controllers) {
    // 健康检查
    app.get("/health", (req, res) => res.status(200).send("OK"));

    //
    G(app);

    // 路由的实现
    controllers.forEach((controller) => {
      const instance = new controller();
      const prefix = Reflect.getMetadata("prefix", controller);
      const routes: Array<RouteDefinition> = Reflect.getMetadata(
        "routes",
        controller
      );

      routes.forEach((route) => {
        app[route.requestMethod](
          prefix + route.path,
          (req: express.Request, res: express.Response) => {
            const result = instance[route.methodName](req, res);
            if (result) {
              res.status(200).send(result);
            } else {
              res.status(200).send();
            }
          }
        );
      });
    });

    return app;
  }
}
