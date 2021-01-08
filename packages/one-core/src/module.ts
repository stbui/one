/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

import { Type } from './interfaces/type.interface';
import { Container } from './container';
import { InstanceWrapper } from './instance-wrapper';

function uuid() {
    var s: any = [];
    var hexDigits = '0123456789abcdef';
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = '-';

    var uuid = s.join('');
    return uuid;
}
export class Module {
    private readonly _id: string;
    private _imports = new Set<Module>();
    private _providers = new Map();
    private _controllers = new Map();

    constructor(private readonly _metatype: Type<any>, private readonly container: Container) {
        this.addCoreProviders();
        // this._id = randomStringGenerator();'
        this._id = uuid();
    }

    get id(): string {
        return this._id;
    }

    get components() {
        return this._providers;
    }

    get instance() {
        if (!this._providers.has(this._metatype.name)) {
            throw new Error('error');
        }

        const module = this._providers.get(this._metatype.name);
        return module.instance;
    }

    get metatype(): Type<any> {
        return this._metatype;
    }

    get providers(): Map<any, InstanceWrapper> {
        return this._providers;
    }

    get controllers(): Map<any, InstanceWrapper> {
        return this._controllers;
    }

    get imports(): Set<Module> {
        return this._imports;
    }

    public addCoreProviders() {}

    addRelatedModule(module: Module) {
        this._imports.add(module);
    }

    addController(controller: Type<any>) {
        this._controllers.set(
            controller.name,
            new InstanceWrapper({
                name: controller.name,
                metatype: controller,
                instance: null,
                isResolved: false,
                scope: undefined,
                host: this,
            })
        );
    }

    addProvider(provider): string {
        this._providers.set(
            provider.name,
            new InstanceWrapper({
                name: provider.name,
                metatype: provider,
                instance: null,
                isResolved: false,
                scope: undefined,
                host: this,
            })
        );

        return provider.name;
    }
}
