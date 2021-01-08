/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

export interface ModuleMetadata {
    imports?: Array<any>;
    controllers?: any[];
    providers?: any[];
    exports?: any[];
}

/**
 * module
 * - `controllers`
 * - `providers`
 * @param metadata
 */
export function Module(metadata: ModuleMetadata): ClassDecorator {
    return (target: object) => {
        for (const property in metadata) {
            if (metadata.hasOwnProperty(property)) {
                Reflect.defineMetadata(property, metadata[property], target);
            }
        }
    };
}
