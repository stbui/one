import { Command, Action } from '@stbui/one-common';

@Command({
    name: 'init',
    description: '初始化',
    example: {
        command: 'cli init',
        description: '初始化',
    },
})
export class InitCommand {
    @Action()
    run() {
        console.log('InitCommand 已执行');
    }
}
