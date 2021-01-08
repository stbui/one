/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

export class Service {
    commands: any[] = [];

    constructor() {}

    setCommand(metadata: object) {
        this.commands.push(metadata);
    }

    /**
     * 获取注册过的命名元数据
     */
    getCommands(): any[] {
        return this.commands;
    }

    /**
     * 指定获取
     * @param name
     */
    getCommand(name: string) {
        return this.commands[name];
    }
}
