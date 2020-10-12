import "reflect-metadata";
import { ACTION_METADATA } from "../constants";

export const Action = (): MethodDecorator => {
  return (target: any, propertyKey: string | symbol): void => {
    Reflect.defineMetadata(ACTION_METADATA, propertyKey, target.constructor);
  };
};
