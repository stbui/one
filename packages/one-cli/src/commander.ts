/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

const { Command } = require('commander');

export class YargsAdapter {
    command: any;

    constructor(protected readonly instance?: any) {
        this.instance = new Command();
    }

    getInstance() {
        return this.instance;
    }

    initCommand() {
        this.command = this.instance;
    }

    getCommnad() {
        return this.command;
    }
}
