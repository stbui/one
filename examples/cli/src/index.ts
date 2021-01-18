import { join } from 'path';

import { Factory } from '@stbui/one-cli';
import { DevCommand } from './dev';
import { StartCommand } from './start';
import { VersionCommand } from './version';
import { InitCommand } from './init';

function importExtendCommand(dependencies: object): any[] {
    return Object.keys(dependencies)
        .filter((name: string) => /^(@stbui\/)one-cli-/.test(name))
        .map(name => require(name));
}

function resoveDependencies() {
    const APP_PATH = process.cwd();
    const PKG_PATH = join(APP_PATH, 'package.json');

    const packageModule = require(PKG_PATH);
    const dependencies = { ...packageModule.dependencies, ...packageModule.devDependencies };

    return importExtendCommand(dependencies);
}

function bootstrap() {
    const extendCommand = resoveDependencies();

    Factory.create([InitCommand, DevCommand, StartCommand, VersionCommand, ...extendCommand]);
}

bootstrap();
