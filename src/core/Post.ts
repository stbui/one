import 'reflect-metadata';
import { RouteDefinition } from './RouteDefinition';

export const Get = (path: string = ''): MethodDecorator => {
    return (target, propertyKey: string): void => {
        if (!Reflect.hasMetadata('routes', target.constructor)) {
            Reflect.defineMetadata('routes', [], target.constructor);
        }

        const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>;
        routes.push({
            requestMethod: 'post',
            path,
            methodName: propertyKey,
        });

        Reflect.defineMetadata('routes', routes, target.constructor);
    };
};
