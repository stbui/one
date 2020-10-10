import "reflect-metadata";
import { metadata } from "../constants";
export const Action = () => {
    return (target, propertyKey) => {
        Reflect.defineMetadata(metadata.ACTION_IDENTIFIER, propertyKey, target.constructor);
    };
};
