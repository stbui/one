/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

import { Container } from './container';
import { DependenciesScanner } from './scanner';
import { Injector } from './injector';

/**
 * this is Runner.
 */
export class Runner {
    private static container = new Container();
    private static dependenciesScanner = new DependenciesScanner(Runner.container);
    private static injector = new Injector(Runner.container);

    /**
     * 开始分析模块依赖
     * @param {object} module - this is a module.
     */
    static run(module) {
        this.dependenciesScanner.scan(module);
        this.injector.createInstancesOfDependencies();

        this.setupRoutes();
    }

    static setupRoutes() {
        const modules = this.container.getModules();

        modules.forEach((module: any, moduleName: any) => {
            this.setupRouters(module.controllers, moduleName);
        });
    }

    static setupRouters(routes, moduleName: string) {
        routes.forEach(route => {
            console.log(routes);
        });
    }
}
