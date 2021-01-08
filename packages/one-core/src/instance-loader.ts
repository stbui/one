/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

import { Container } from './container';
import { Injector } from './injector';
import { Module } from './module';

//注射器，依赖注入
export class InstanceLoader {
    private readonly injector = new Injector();

    constructor(private readonly container: Container) {}

    /**
     * 实例化依赖
     */
    createInstancesOfDependencies() {
        const modules = this.container.getModules();

        this.createPrototypes(modules);
        this.createInstances(modules);
    }

    /**
     * 创建模块中依赖provider，controller原型
     * @param modules
     */
    private createPrototypes(modules: Map<string, Module>) {
        modules.forEach(module => {
            this.createPrototypesOfProviders(module);
            this.createPrototypesOfControllers(module);
        });
    }

    private createInstances(modules: Map<string, Module>) {
        modules.forEach(module => {
            this.createInstancesOfProviders(module);
            this.createInstancesOfControllers(module);
        });
    }

    /**
     * 提供者原型对象
     * @param module
     */
    private createPrototypesOfProviders(module: Module) {
        const { providers } = module;
        providers.forEach(wrapper => {
            this.injector.loadPrototype(wrapper, providers);
        });
    }

    /**
     * 控制器原型对象
     * @param module
     */
    private createPrototypesOfControllers(module) {
        const { controllers } = module;
        controllers.forEach(wrapper => {
            this.injector.loadPrototype(wrapper, controllers);
        });
    }

    private createInstancesOfProviders(module: Module) {
        const { providers } = module;
        providers.forEach(wrapper => {
            this.injector.loadProvider(wrapper, module);
        });
    }

    private createInstancesOfControllers(module: Module) {
        const { controllers } = module;
        controllers.forEach(wrapper => {
            this.injector.loadController(wrapper, module);
        });
    }
}
