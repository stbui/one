import { Command, Option, Action } from '@stbui/one-common';

@Command({
    name: 'dev',
    description: '开发辅助',
    example: {
        command: 'cli dev',
        description: '开发辅助',
    },
})
export class DevCommand {
    @Option({
        alias: 'd',
    })
    name: string | undefined;

    @Action()
    run() {
        console.log('DevCommand 已执行');
    }
}
