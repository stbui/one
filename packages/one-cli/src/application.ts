/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

import 'reflect-metadata';
import { COMMAND_METADATA, OPTION_METADATA, ACTION_METADATA } from '@stbui/one-common';
import { Container, Module, Type } from './container';

export class Application {
    private args: any;

    constructor(private readonly container: Container, private readonly commandAdapter) {
        this.registerCommand();
        this.resolve();
    }

    /**
     * 注册服务
     */
    registerCommand() {
        this.args = this.createCommand();
    }

    createCommand() {
        this.commandAdapter.initCommand();
        return this.commandAdapter.getCommnad();
    }

    /**
     * 解析
     */
    resolve() {
        const commands = this.container.getCommands();

        commands.forEach(instanceWrapper => {
            const { metatype } = instanceWrapper;
            const command = Reflect.getMetadata(COMMAND_METADATA, metatype);

            this.setupCommands(command, instanceWrapper);
        });
    }

    getMetadataOption(target: Function) {
        const option = Reflect.getMetadata(OPTION_METADATA, target);
        return option;
    }

    /**
     * 命令行执行
     */
    setupCommands(command, instanceWrapper: Module) {
        const { metatype, instance } = instanceWrapper;

        if (this.args.input === command.name) {
            // option
            this.resovleProperties(metatype, (option, value) => {
                instance[option.propertyName] = value;
            });
            // action
            this.execCommands(metatype, instance);
        }
    }

    /**
     * 解析选项
     * @param metatype
     * @param callback
     */
    resovleProperties(metatype: Type<any>, callback: Function) {
        const input = this.args.flags;
        const options = this.getMetadataOption(metatype);

        if (options) {
            options.forEach(option => {
                const value = input[`-${option.alias}`] || input[`-${option.propertyName}`];
                if (value !== undefined) {
                    callback(option, value);
                }
            });
        }
    }

    /**
     * 解析运行命令行
     * @param metatype
     * @param instance
     */
    execCommands(metatype: Type<any>, instance: Function) {
        const exec = Reflect.getMetadata(ACTION_METADATA, metatype);
        if (exec) {
            instance[exec]();
        }
    }
}
