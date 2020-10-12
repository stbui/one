import "reflect-metadata";
import { RouteDefinition } from "../interfaces";

export const Post = (path: string = ""): MethodDecorator => {
  return (target, propertyKey: string | symbol): void => {
    if (!Reflect.hasMetadata("routes", target.constructor)) {
      Reflect.defineMetadata("routes", [], target.constructor);
    }

    const routes = Reflect.getMetadata("routes", target.constructor) as Array<
      RouteDefinition
    >;
    routes.push({
      requestMethod: "post",
      path,
      methodName: propertyKey,
    });

    Reflect.defineMetadata("routes", routes, target.constructor);
  };
};
