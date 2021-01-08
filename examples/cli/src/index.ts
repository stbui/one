import { Factory } from '@stbui/one-cli';
import { DevCommand } from './dev';
import { StartCommand } from './start';
import { VersionCommand } from './version';
import { InitCommand } from './init';

function bootstrap() {
    Factory.create([InitCommand, DevCommand, StartCommand, VersionCommand]);
}

bootstrap();
