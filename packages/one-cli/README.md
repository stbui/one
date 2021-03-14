# `@stbui/one-cli`

nodejs 命令行

# setup

```bash
npm install @stbui/one-cli @stbui/one-common --save
```

# example

```js
import { Command, Option, Action } from '@stbui/one-common';
import { Factory } from '@stbui/one-cli';

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

function bootstrap() {
    Factory.create([StartCommand]);
}

bootstrap();
```
