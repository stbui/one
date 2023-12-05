/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

import 'reflect-metadata';
import { COMMAND_METADATA, OPTION_METADATA, ACTION_METADATA } from '@stbui/one-common';
import { Container, Module, Type } from './container';
import { builtCommandAdapter } from './adapter/command';

export class Application {
    private args: any;

    constructor(
        private readonly container: Container,
        private readonly commandAdapter: builtCommandAdapter
    ) {
        this.registerCommand();
        this.resolve();
    }

    /**
     * 注册服务命令
     */
    registerCommand() {
        this.args = this.createCommand();
    }

    /**
     * 初始化命令并获取到命令解析结果
     * @returns
     */
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
     * 解析定义类型中的参数
     */
    setupCommands(command: ClassDecorator, instanceWrapper: Module) {
        const { metatype, instance } = instanceWrapper;

        if (this.args._[0] === command.name) {
            // 解析
            this.resovleProperties(metatype, (option, value) => {
                // 将命令行参数结果更新到属性上
                instance[option.propertyName] = value;
            });
            // 执行命令
            this.execCommands(metatype, instance);
        }
    }

    /**
     * 解析类中所有属性中有@Option
     * @param metatype: 用户类
     * @param callback: 属性回调
     */
    resovleProperties(
        metatype: Type<any>,
        callback: (option: { alias: string; propertyName: string }, value: string) => void
    ) {
        const input = this.args;
        const options: any[] = this.getMetadataOption(metatype);

        if (options) {
            options.forEach(option => {
                // 匹配命令参数返回的结果
                const value = input[option.alias] || input[option.propertyName];
                if (value !== undefined) {
                    callback(option, value);
                }
            });
        }
    }

    /**
     * 执行类上定义action的方法
     * @param metatype
     * @param instance
     */
    execCommands(metatype: Type<any>, instance: Function) {
        const callMethodName = Reflect.getMetadata(ACTION_METADATA, metatype);
        if (callMethodName) {
            instance[callMethodName]();
        }
    }

    pipe() {
        const child = require('child_process').execSync(`$(npm bin)/${process.argv.slice(2).join(' ')}`, {
            stdio: 'inherit',
        });

        child.on('exit', (code: number) => {
            process.exit(code);
        });
    }
}
