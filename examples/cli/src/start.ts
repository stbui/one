import { Command, Option, Action } from '@stbui/one-common';

@Command({
    name: 'start',
    description: '启动',
    example: {
        command: 'cli start demo -p 3000 -w',
        description: '启动',
    },
})
export class StartCommand {
    @Option({
        alias: 'p',
        description: '端口',
    })
    port: number = 3000;

    @Option({
        alias: 'w',
        description: '实时监听',
    })
    watch: boolean = false;

    constructor() {}

    @Action()
    run() {
        console.log('startMode', this.watch);
        console.log('port', this.port);
        console.log('StartCommand 已执行');
    }
}
