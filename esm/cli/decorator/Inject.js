import "reflect-metadata";
import { metadata } from "../constants";
export const Inject = (params) => {
    return (target) => {
        Reflect.defineMetadata(metadata.COMMAND_IDENTIFIER, params, target);
    };
};
//# sourceMappingURL=Inject.js.map