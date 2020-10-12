import "reflect-metadata";

import { PATH_METADATA, METHOD_METADATA } from "../constants";

export const Get = (path: string = "/"): MethodDecorator => {
  return (target: object, propertyKey: string | symbol, descriptor?) => {
    Reflect.defineMetadata(PATH_METADATA, path, descriptor.value);
    Reflect.defineMetadata(METHOD_METADATA, "GET", descriptor.value);
    return descriptor;
  };
};
