import "reflect-metadata";
export declare class Container {
    private args;
    constructor(commands: any);
    static run(commands: any): Container;
    private resolve;
}
