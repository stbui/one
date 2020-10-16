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

    /**
     * 开始分析模块依赖
     * @param {object} module - this is a module.
     */
    static run(module) {
        this.dependenciesScanner.scan(module);
        this.instanceLoader.createInstancesOfDependencies();
    }

    static getModules() {
        return this.container.getModules();
    }
}
