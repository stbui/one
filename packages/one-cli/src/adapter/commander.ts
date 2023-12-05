/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

// @ts-ignore
import { Command } from 'commander';

export class CommanderAdapter {
    instance: any = new Command();

    constructor() {}

    initCommand() {}

    getInstance() {
        return this.instance;
    }

    getCommnad() {
        return this.instance;
    }
}
