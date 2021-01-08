import { Command, Action } from '@stbui/one-common';
const pkg = require('../package.json');

@Command({
    name: 'version',
    description: '版本',
    example: {
        command: 'cli version',
        description: '版本',
    },
})
export class VersionCommand {
    @Action()
    run() {
        console.log('output version', pkg);
    }
}
