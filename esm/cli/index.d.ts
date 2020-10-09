import "reflect-metadata";
import "./Command";
export * from "./constants";
export * from "./decorator";
export * from "./Container";
export declare class Common {
    asversion(value: any, cmd: any): void;
    ashelp(value: any, cmd: any): void;
}
export declare class Webpack extends Common {
    version: string;
}
export declare class Babel extends Common {
    version: string;
}
