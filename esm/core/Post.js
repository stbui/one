import "reflect-metadata";
export const Post = (path = "") => {
    return (target, propertyKey) => {
        if (!Reflect.hasMetadata("routes", target.constructor)) {
            Reflect.defineMetadata("routes", [], target.constructor);
        }
        const routes = Reflect.getMetadata("routes", target.constructor);
        routes.push({
            requestMethod: "post",
            path,
            methodName: propertyKey,
        });
        Reflect.defineMetadata("routes", routes, target.constructor);
    };
};
//# sourceMappingURL=Post.js.map