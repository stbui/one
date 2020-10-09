"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
require("reflect-metadata");
const constants_1 = require("./constants");
const Command_1 = require("./Command");
class Container {
    constructor(commands) {
        this.args = Command_1.Command();
        this.resolve(commands);
    }
    static run(commands) {
        return new Container(commands);
    }
    resolve(commands) {
        commands.forEach((command) => {
            const indentifier = Reflect.getMetadata(constants_1.metadata.COMMAND_IDENTIFIER, command);
            if (this.args.input === indentifier) {
                let factory = new command();
                const options = Reflect.getMetadata(constants_1.metadata.OPTION_IDENTIFIER, command);
                options.forEach((option) => {
                    const input = this.args.flags;
                    const value = input[`--${option.name}`];
                    if (value) {
                        factory[option.methodName](value, {
                            command: indentifier,
                            options,
                            instance: factory,
                        });
                    }
                });
                const run = Reflect.getMetadata(constants_1.metadata.ACTION_IDENTIFIER, command);
                if (run) {
                    factory[run]();
                }
            }
        });
    }
}
exports.Container = Container;
//# sourceMappingURL=Container.js.map