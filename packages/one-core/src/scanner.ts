/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

import 'reflect-metadata';
import { MODULE_METADATA } from '@stbui/one-common';
import { Container } from './container';
import { Type } from './interfaces/type.interface';

export class DependenciesScanner {
    constructor(private readonly container: Container) {}

    scan(module: Type<any>) {
        this.scanForModules(module);
        this.scanModulesForDependencies();
    }

    scanForModules(module: any) {
        const moduleInstance = this.insertModule(module);

        const modules = Reflect.getMetadata(MODULE_METADATA.IMPORTS, module) || [];
        modules.map(module => this.scanForModules(module));

        return moduleInstance;
    }

    insertModule(module: any) {
        return this.container.addModule(module);
    }

    /**
     * 分析模块相关依赖
     */
    scanModulesForDependencies() {
        const modules = this.container.getModules();

        modules.forEach(({ metatype }, token) => {
            const modules = Reflect.getMetadata(MODULE_METADATA.IMPORTS, metatype) || [];
            modules.forEach(module => this.insertImport(module, token));

            const controllers = Reflect.getMetadata(MODULE_METADATA.CONTROLLERS, metatype) || [];
            controllers.forEach(controller => this.insertController(controller, token));
        });
    }

    private insertImport(related: any, token: string) {
        this.container.addImport(related, token);
    }

    private insertController(controller: Type<any>, token: string) {
        this.container.addController(controller, token);
    }
}
