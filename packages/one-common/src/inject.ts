/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */
import { PROPERTY_DEPS_METADATA } from './constants';

export const isFunction = (fn): boolean => typeof fn === 'function';

export function Inject<T = any>(token?: T) {
    return (target: object, key: string | symbol, index?: number) => {
        token = token || Reflect.getMetadata('design:type', target, key);

        const type = token && isFunction(token) ? ((token as any) as Function).name : token;

        let properties = Reflect.getMetadata(PROPERTY_DEPS_METADATA, target.constructor) || [];

        properties = [...properties, { key, type }];

        Reflect.defineMetadata(PROPERTY_DEPS_METADATA, properties, target.constructor);
    };
}
