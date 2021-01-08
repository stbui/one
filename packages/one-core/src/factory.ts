/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

import { Container } from './container';
import { DependenciesScanner } from './scanner';
import { InstanceLoader } from './instance-loader';

export class FactoryStatic {
    create(module: any) {
        const container = new Container();
        this.initialize(module, container);

        // console.log(container);
    }

    initialize(module: any, container: Container) {
        const instanceLoader = new InstanceLoader(container);
        const dependenciesScanner = new DependenciesScanner(container);

        dependenciesScanner.scan(module);
        instanceLoader.createInstancesOfDependencies();
    }
}

export const Factory = new FactoryStatic();
