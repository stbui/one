import "reflect-metadata";

export const Get = (path: string = ""): MethodDecorator => {
  return (target, propertyKey: string | symbol): void => {
    if (!Reflect.hasMetadata("routes", target.constructor)) {
      Reflect.defineMetadata("routes", [], target.constructor);
    }

    const routes = Reflect.getMetadata("routes", target.constructor);

    routes.push({
      requestMethod: "get",
      path,
      methodName: propertyKey,
    });

    Reflect.defineMetadata("routes", routes, target.constructor);
  };
};
