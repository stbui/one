# `@stbui/one-cli`

前端中的依赖注入

软件开发最富有挑战性也最有趣的一项任务就是如何化繁为简。

在保证业务需求得到满足的前提下，我们（软件工程师们）需要确保软件的可用性、可扩展性、性能、一致性、容错性、稳定性、可重用性等等非功能特性，这决定了软件天生是复杂的。但是人的思维能力是有限的，我们没法兼顾这么多的方面，因此，我们借助“抽象”思想来帮助我们设计软件的架构，征服软件的复杂性。

抽象思想给开发者的武器库里增加了“分层”，“函数、类、模块”，“客户端-服务端”这样的思维工具，开发者们将软件抽象成各个组成部分，然后确定它们内部的工作原理和相互之间的协作方式，这样就能通过一次解决一个小问题，最终解决一个大问题。进一步地，为了更好地做“将软件划分成各个组成部分”这件事，业界提出了各种各样的设计原则和设计方法：职责驱动设计、SOLID 原则、GRASP 原则、高内聚低耦合等。但是这样的原则和设计方法可能还是不够具体，因此设计模式被提出了，最著名的就是 GoF 的 23 种设计模式，这样我们实际编写代码时就能够按图索骥了。

依赖注入是最近几年在前端领域用得越来越多的一种设计模式，本文的目的就是要介绍这种模式如何贯彻抽象思想并反映面向对象设计原则的，还会讨论依赖注入模式本身的特性，以及如何在项目中运用它。

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
