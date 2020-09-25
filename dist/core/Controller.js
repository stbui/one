"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
require("reflect-metadata");
exports.Controller = (prefix = '') => {
    return (target) => {
        Reflect.defineMetadata('prefix', prefix, target);
    };
};
//# sourceMappingURL=Controller.js.map