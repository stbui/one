import "reflect-metadata";
import { metadata } from "../constants";

export const Action = (): MethodDecorator => {
  return (target: any, propertyKey: string | symbol): void => {
    Reflect.defineMetadata(
      metadata.ACTION_IDENTIFIER,
      propertyKey,
      target.constructor
    );
  };
};
