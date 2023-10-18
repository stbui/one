/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

import 'reflect-metadata';

export interface Type<T = any> extends Function {
    new (...args: any[]): T;
}

export interface Module {
    /** 类名字 */
    name: string;
    /** 类 */
    metatype: Type<any>;
    /** 实例化类 */
    instance: any;
}

/**
 * 存储类的元数据
 */
export class Container {
    private readonly commands = new Map<string, Module>();

    addCommand(command: Type<any>) {
        return this.commands.set(command.name, {
            name: command.name,
            metatype: command,
            instance: null,
        });
    }

    getCommands(): Map<string, Module> {
        return this.commands;
    }
}
