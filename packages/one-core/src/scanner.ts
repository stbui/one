/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */

import 'reflect-metadata';
import { Container } from './container';
import { AppModule } from './interfaces/module.interface';

export class DependenciesScanner {
    constructor(private container: Container) {}

    scan(module: AppModule) {
        this.scanForModules(module);
        this.scanModulesForDependencies();
    }

    private scanForModules(module: AppModule) {
        this.storeModule(module);

        const innerModules = Reflect.getMetadata('modules', module) || [];
        innerModules.map(module => this.scanForModules(module));
    }

    private storeModule(module: AppModule) {
        this.container.addModule(module);
    }

    private scanModulesForDependencies() {
        const modules = this.container.getModules();

        modules.forEach((deps, module) => {
            const modules = Reflect.getMetadata('modules', module) || [];
            modules.map(module => this.storeRelatedModule(module, module));

            const components = Reflect.getMetadata('components', module) || [];
            components.map(component => this.storeComponent(component, module));

            const controllers = Reflect.getMetadata('controllers', module) || [];
            controllers.map(controller => this.storeController(controller, module));
        });
    }

    private storeRelatedModule(related, module: AppModule) {
        this.container.addRelatedModule(related, module);
    }

    private storeComponent(component, module: AppModule) {
        this.container.addComponent(component, module);
    }

    private storeController(controller, module: AppModule) {
        this.container.addController(controller, module);
    }
}
