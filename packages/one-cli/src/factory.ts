/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

import { Container } from './container';
import { DependenciesScanner } from './scanner';
import { InstanceLoader } from './instance-loader';
import { Application } from './application';
import { builtCommandAdapter } from './adapter/command';

export class FactoryStatic {
    create(useModules: any[], cmdAdapter = new builtCommandAdapter()) {
        const container = new Container();
        this.initialize(useModules, container);

        const instance = new Application(container, cmdAdapter);
        return instance;
    }

    initialize(useModules: any[], container: Container) {
        // 将所有modlules添加到容器中
        const dependenciesScanner = new DependenciesScanner(container);
        dependenciesScanner.scan(useModules);

        //
        const instanceLoader = new InstanceLoader(container);
        instanceLoader.createInstancesOfDependencies();
    }
}

export const Factory = new FactoryStatic();
