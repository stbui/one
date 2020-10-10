import "reflect-metadata";
import { metadata } from "../constants";

export const Inject = (params?: any): ClassDecorator => {
  return (target: any) => {
    Reflect.defineMetadata(metadata.COMMAND_IDENTIFIER, params, target);
  };
};
