import "reflect-metadata";
import { metadata } from "../constants";
export const Command = (params) => {
    return (target) => {
        Reflect.defineMetadata(metadata.COMMAND_IDENTIFIER, params, target);
    };
};
//# sourceMappingURL=Command.js.map