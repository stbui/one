/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

import 'reflect-metadata';
import express from 'express';
import { PATH_METADATA, METHOD_METADATA } from '@stbui/one-common';
import { health } from './health';

const app = express();

export class Application {
    static run(controllers) {
        // 健康检查
        health(app);

        console.log('[stbui]:', '注册路由');
        controllers.forEach(controller => {
            const instance = new controller();
            const prefix = Reflect.getMetadata(PATH_METADATA, controller);
            const instancePrototype = Object.getPrototypeOf(instance);

            this.scranFromPrototype(instancePrototype, method => {
                const targetCallback = instancePrototype[method];
                const routePath = Reflect.getMetadata(PATH_METADATA, targetCallback);

                if (!routePath) {
                    return null;
                }

                const requestMethod = this.getMethod(targetCallback);

                //
                console.log('[stbui]:', requestMethod, prefix + routePath);
                this.setupRoutes(requestMethod, prefix + routePath, instance[method]);
            });
        });

        console.log();

        return app;
    }

    static setupRoutes(method: string, path: string, fn: Function) {
        app[method](path, (req: express.Request, res: express.Response, next) => {
            const result = fn(req, res, next);
            if (result) {
                res.status(200).send(result);
            } else {
                next();
            }
        });
    }

    static listen(port: number, callback?: () => void) {
        app.listen(port, callback);
        console.log(`Server running on http://127.0.0.1:${port}`);
        return app;
    }

    static getMethod(target: Function) {
        const requestMethod = Reflect.getMetadata(METHOD_METADATA, target);
        return requestMethod.toLocaleLowerCase();
    }

    static scranFromPrototype(prototype, callback) {
        return Object.getOwnPropertyNames(prototype)
            .filter(method => method !== 'constructor' && typeof prototype[method] === 'function')
            .map(callback);
    }
}
