import 'reflect-metadata';
import { OPTION_METADATA } from '../constants';

export interface OptionsMetadata {
    /**
     * 参数简写
     */
    alias?: string;
    /**
     * 参数描述
     */
    description?: string;
}

export const Option = (metadata: OptionsMetadata = {}): PropertyDecorator => {
    return (target: any, propertyKey: string | symbol): void => {
        if (!Reflect.hasMetadata(OPTION_METADATA, target.constructor)) {
            Reflect.defineMetadata(OPTION_METADATA, [], target.constructor);
        }

        const options = Reflect.getMetadata(OPTION_METADATA, target.constructor);

        options.push({
            ...metadata,
            propertyName: propertyKey,
        });

        Reflect.defineMetadata(OPTION_METADATA, options, target.constructor);
    };
};
