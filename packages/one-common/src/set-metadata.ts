/**
 *
 * @param metadataKey
 * @param metadataValue
 *
 * @SetMetadata('roles', ['admin'])
 */
export const SetMetadata = (metadataKey, metadataValue) => {
    const decoratorFactory = (target: object, key?: any, descriptor?: any) => {
        if (descriptor) {
            Reflect.defineMetadata(metadataKey, metadataValue, descriptor.value);
            return descriptor;
        }
        Reflect.defineMetadata(metadataKey, metadataValue, target);
        return target;
    };

    decoratorFactory.KEY = metadataKey;
    return decoratorFactory;
};
