import 'reflect-metadata';

import { PATH_METADATA, METHOD_METADATA } from '../constants';

export const Post = (path: string = '/'): MethodDecorator => {
    return (target: object, propertyKey: string | symbol, descriptor?: any) => {
        Reflect.defineMetadata(PATH_METADATA, path, descriptor.value);
        Reflect.defineMetadata(METHOD_METADATA, 'POST', descriptor.value);
        return descriptor;
    };
};
