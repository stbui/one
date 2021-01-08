/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

import { Container } from './container';
import { DependenciesScanner } from './scanner';
import { InstanceLoader } from './instance-loader';

export class Runner {
    private static container = new Container();
    private static dependenciesScanner = new DependenciesScanner(Runner.container);
    private static instanceLoader = new InstanceLoader(Runner.container);

    create(module) {
        const container = new Container();
        this.initialize(module, container);
    }

    createApplicationContext(module) {
        const container = new Container();
        this.initialize(module, container);
        // const modules = container.getModules().values();
    }

    initialize(module: any, container: Container) {
        const instanceLoader = new InstanceLoader(container);
        const dependenciesScanner = new DependenciesScanner(container);

        dependenciesScanner.scan(module);
        instanceLoader.createInstancesOfDependencies();
    }
    /**
     * 开始分析模块依赖
     * @param {object} module
     */
    static run(module: any) {
        this.dependenciesScanner.scan(module);
        this.instanceLoader.createInstancesOfDependencies();
    }

    static getModules() {
        return this.container.getModules();
    }
}
