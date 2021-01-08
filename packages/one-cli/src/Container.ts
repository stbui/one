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
    name: string;
    metatype: Type<any>;
    instance: any;
}

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
