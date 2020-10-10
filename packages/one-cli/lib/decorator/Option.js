"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Option = void 0;
require("reflect-metadata");
const constants_1 = require("../constants");
exports.Option = (option = {}) => {
    return (target, propertyKey) => {
        if (!Reflect.hasMetadata("option", target.constructor)) {
            Reflect.defineMetadata("option", [], target.constructor);
        }
        const options = Reflect.getMetadata("option", target.constructor);
        options.push(Object.assign(Object.assign({}, option), { methodName: propertyKey }));
        Reflect.defineMetadata(constants_1.metadata.OPTION_IDENTIFIER, options, target.constructor);
    };
};
