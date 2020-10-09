"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
require("reflect-metadata");
const constants_1 = require("../constants");
exports.Command = (params) => {
    return (target) => {
        Reflect.defineMetadata(constants_1.metadata.COMMAND_IDENTIFIER, params, target);
    };
};
//# sourceMappingURL=Command.js.map