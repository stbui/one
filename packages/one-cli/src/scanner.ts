/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

import 'reflect-metadata';
import { Container, Type } from './container';

export class DependenciesScanner {
    constructor(private readonly container: Container) {}

    scan(useModules: any[]) {
        this.scanForModules(useModules);
    }

    private scanForModules(useModules: any[]) {
        useModules.forEach(module => {
            this.insertController(module);
        });
    }

    /**
     * 添加到容器中
     * @param module
     */
    private insertController(module: Type<any>) {
        this.container.addCommand(module);
    }
}
