import 'reflect-metadata';
import { OPTION_METADATA } from '../constants';

export const Option = (option: object = {}): MethodDecorator => {
    return (target: any, propertyKey: string | symbol): void => {
        if (!Reflect.hasMetadata('option', target.constructor)) {
            Reflect.defineMetadata('option', [], target.constructor);
        }

        const options = Reflect.getMetadata('option', target.constructor);

        options.push({
            ...option,
            methodName: propertyKey,
        });

        Reflect.defineMetadata(OPTION_METADATA, options, target.constructor);
    };
};
