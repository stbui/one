import 'reflect-metadata';

import { PATH_METADATA, METHOD_METADATA } from '../constants';

export const RequestMapping = (metadata: any): MethodDecorator => {
    const pathMetadata = metadata[PATH_METADATA];
    const path = pathMetadata && pathMetadata.length ? pathMetadata : '/';
    const requestMethod = metadata[METHOD_METADATA] || 'GET';

    return (target: object, key: string | symbol, descriptor: any) => {
        Reflect.defineMetadata(PATH_METADATA, path, descriptor.value);
        Reflect.defineMetadata(METHOD_METADATA, requestMethod, descriptor.value);
        return descriptor;
    };
};
