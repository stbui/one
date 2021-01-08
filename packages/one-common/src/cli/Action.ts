import 'reflect-metadata';
import { ACTION_METADATA } from '../constants';

/**
 * 命令后处理函数
 */
export const Action = (): MethodDecorator => {
    return (target: any, propertyKey: string | symbol): void => {
        Reflect.defineMetadata(ACTION_METADATA, propertyKey, target.constructor);
    };
};
