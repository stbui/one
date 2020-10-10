"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
require("reflect-metadata");
const constants_1 = require("../constants");
exports.Action = () => {
    return (target, propertyKey) => {
        Reflect.defineMetadata(constants_1.metadata.ACTION_IDENTIFIER, propertyKey, target.constructor);
    };
};
