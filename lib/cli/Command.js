"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const FLAG_REGEX_PATTERN = /^-{1,2}/;
exports.Command = (args = process.argv.slice(2), options = {}) => {
    const inputs = [];
    const flags = {};
    let key = null;
    let value = null;
    while (args.length) {
        if (!args[0].match(FLAG_REGEX_PATTERN)) {
            inputs.push(args.shift());
        }
        else if (args[0].match(FLAG_REGEX_PATTERN)) {
            key = args.shift();
            if (args.length && !args[0].match(FLAG_REGEX_PATTERN)) {
                value = args.shift();
            }
            else {
                value = true;
            }
            flags[key] = value;
        }
    }
    if (!inputs.length && !options.requireUserInput) {
        inputs.push(process.cwd());
    }
    if (options.allowMultipleInputs) {
        return {
            flags,
            inputs,
        };
    }
    return {
        flags,
        input: inputs[0],
    };
};
//# sourceMappingURL=Command.js.map