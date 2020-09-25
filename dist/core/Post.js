"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Get = void 0;
require("reflect-metadata");
exports.Get = (path = '') => {
    return (target, propertyKey) => {
        if (!Reflect.hasMetadata('routes', target.constructor)) {
            Reflect.defineMetadata('routes', [], target.constructor);
        }
        const routes = Reflect.getMetadata('routes', target.constructor);
        routes.push({
            requestMethod: 'post',
            path,
            methodName: propertyKey,
        });
        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};
//# sourceMappingURL=Post.js.map