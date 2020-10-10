"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inject = void 0;
require("reflect-metadata");
const constants_1 = require("../constants");
exports.Inject = (params) => {
    return (target) => {
        Reflect.defineMetadata(constants_1.metadata.COMMAND_IDENTIFIER, params, target);
    };
};
