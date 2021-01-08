/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

import { Container } from './container';
import { DependenciesScanner } from './scanner';
import { InstanceLoader } from './instance-loader';
import { Application } from './application';
import { CommandAdapter } from './command';

export class FactoryStatic {
    create(module, cmdAdapter = new CommandAdapter()) {
        const container = new Container();
        this.initialize(module, container);

        const instance = new Application(container, cmdAdapter);
        return instance;
    }

    initialize(command, container) {
        const dependenciesScanner = new DependenciesScanner(container);
        dependenciesScanner.scan(command);

        const instanceLoader = new InstanceLoader(container);
        instanceLoader.createInstancesOfDependencies();
    }
}

export const Factory = new FactoryStatic();
