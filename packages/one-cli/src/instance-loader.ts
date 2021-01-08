/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

import { Container, Module } from './container';

export class InstanceLoader {
    constructor(private readonly container: Container) {}

    createInstancesOfDependencies() {
        const commands = this.container.getCommands();

        this.createPrototypes(commands);
        this.createInstances(commands);
    }

    private createPrototypes(commands: Map<string, Module>) {
        commands.forEach(command => {
            this.createPrototypesOfCommand(command);
        });
    }

    private createInstances(commands: Map<string, Module>) {
        commands.forEach(command => {
            this.createInstancesOfCommand(command);
        });
    }

    private createPrototypesOfCommand(command: Module) {}

    private createInstancesOfCommand(command: Module) {
        this.loadInstance(command);
    }

    loadInstance(command: Module) {
        this.instantiateClass(command);
    }

    instantiateClass(wrapper: Module) {
        const { metatype } = wrapper;

        wrapper.instance = new metatype();

        return wrapper.instance;
    }
}
