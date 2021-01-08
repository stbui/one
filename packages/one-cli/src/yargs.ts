/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

export class YargsAdapter {
    command: any;

    constructor(protected readonly instance?: any) {
        this.instance = yargs(hideBin(process.argv)).argv;
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
