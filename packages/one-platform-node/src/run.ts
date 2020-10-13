/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

import 'reflect-metadata';
import express from 'express';
import { PATH_METADATA, METHOD_METADATA } from '@stbui/one-common';

const app = express();

export class Runner {
    static run(controllers) {
        // 健康检查
        app.get('/health', (req, res) => res.status(200).send('OK'));

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

                app[requestMethod](prefix + routePath, (req: express.Request, res: express.Response, next) => {
                    const result = instance[method](req, res, next);
                    if (result) {
                        res.status(200).send(result);
                    } else {
                        next();
                    }
                });
            });
        });

        console.log();

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
