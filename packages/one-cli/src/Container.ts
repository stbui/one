/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

import 'reflect-metadata';
import { COMMAND_METADATA, OPTION_METADATA, ACTION_METADATA } from '@stbui/one-common';
import { Command } from './Command';

export class Container {
    private args: any;

    constructor(commands) {
        this.args = Command();
        this.resolve(commands);
    }

    static run(commands) {
        return new Container(commands);
    }

    private resolve(commands) {
        commands.forEach(command => {
            const indentifier = Reflect.getMetadata(COMMAND_METADATA, command);

            if (this.args.input === indentifier) {
                let factory = new command();
                const options = Reflect.getMetadata(OPTION_METADATA, command);
                options.forEach(option => {
                    const input = this.args.flags;
                    const value = input[`--${option.name}`];

                    if (value) {
                        factory[option.methodName](value, {
                            command: indentifier,
                            options,
                            instance: factory,
                        });
                    }
                });

                const run = Reflect.getMetadata(ACTION_METADATA, command);
                if (run) {
                    factory[run]();
                }
            }
        });
    }
}
