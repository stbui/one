import { SCOPE_OPTIONS_METADATA } from './constants';

export interface InjectableOptions {}

export function Injectable(options?: InjectableOptions): ClassDecorator {
    return (target: object) => {
        Reflect.defineMetadata(SCOPE_OPTIONS_METADATA, options, target);
    };
}
