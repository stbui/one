/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

import 'reflect-metadata';
import { Container, Type } from './container';

export class DependenciesScanner {
    constructor(private readonly container: Container) {}

    scan(commands: any[]) {
        this.scanForCommands(commands);
    }

    scanForCommands(commands: any[]) {
        commands.forEach(command => {
            this.insertController(command);
        });
    }

    private insertController(command: Type<any>) {
        this.container.addCommand(command);
    }
}
