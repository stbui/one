/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

import { Container } from './container';
import { Injector } from './injector';

//注射器，依赖注入
export class InstanceLoader {
    private instanceLoader = new Injector();

    constructor(private container: Container) {}

    createInstancesOfDependencies() {
        const modules = this.container.getModules();

        this.createPrototypes(modules);
        this.createInstances(modules);
    }

    private createPrototypes(modules) {
        modules.forEach(module => {
            this.createPrototypesOfComponents(module);
            this.createPrototypesOfControllers(module);
        });
    }

    private createInstances(modules) {
        modules.forEach(module => {
            this.createInstancesOfComponents(module);
            this.createInstancesOfControllers(module);
        });
    }

    private createInstancesOfComponents(module) {
        module.components.forEach((wrapper, componentType) => {
            this.instanceLoader.loadInstanceOfComponent(componentType, module);
        });
    }

    private createInstancesOfControllers(module) {
        module.controllers.forEach((wrapper, componentType) => {
            this.instanceLoader.loadInstanceOfController(componentType, module);
        });
    }

    private createPrototypesOfComponents(module) {
        module.components.forEach((wrapper, componentType) => {
            this.instanceLoader.loadPrototypeOfInstance(componentType, module.components);
        });
    }

    private createPrototypesOfControllers(module) {
        module.controllers.forEach((wrapper, componentType) => {
            this.instanceLoader.loadPrototypeOfInstance(componentType, module.controllers);
        });
    }
}
