/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

import { Type } from './interfaces/type.interface';
import { STATIC_CONTEXT } from './constants';

export interface InstancePerContext<T> {
    instance: T;
    isResolved?: boolean;
    isPending?: boolean;
    donePromise?: Promise<void>;
}

export interface ContextId {
    readonly id: number;
}

export const INSTANCE_ID_SYMBOL = Symbol.for('instance_metadata:id');

export class InstanceWrapper<T = any> {
    public readonly name: any;
    public scope?: any;
    // @ts-ignore
    public metatype: Type<T> | Function;
    public inject?: (string | symbol | Function | Type<any>)[];
    public forwardRef?: boolean;

    private readonly values = new WeakMap<ContextId, InstancePerContext<T>>();
    private readonly [INSTANCE_ID_SYMBOL]: string;

    constructor(metadata) {
        this.initialize(metadata);
    }

    get id(): string {
        return this[INSTANCE_ID_SYMBOL];
    }

    set instance(value: T) {
        this.values.set(STATIC_CONTEXT, { instance: value });
    }
    get instance(): T {
        const instancePerContext = this.getInstanceByContextId(STATIC_CONTEXT);
        return instancePerContext.instance;
    }

    getInstanceByContextId(contextId: ContextId, inquirerId?: string): InstancePerContext<T> {
        const instancePerContext = this.values.get(STATIC_CONTEXT);
        return instancePerContext ? instancePerContext : this.cloneStaticInstance(contextId);
    }

    cloneStaticInstance(contextId: ContextId): InstancePerContext<T> {
        const instancePerContext: InstancePerContext<T> = {
            // @ts-ignore
            instance: undefined,
            isResolved: false,
            isPending: false,
        };
        //  Object.create(this.metatype.prototype);

        return instancePerContext;
    }

    public createPrototype(contextId) {
        const host = this.getInstanceByContextId(contextId);
        if (host.isResolved) {
            return;
        }
        return Object.create(this.metatype.prototype);
    }

    private initialize(metadata: Partial<InstanceWrapper<T>> & InstancePerContext<T>) {
        const { instance, isResolved, ...wrapperPartial } = metadata;
        Object.assign(this, wrapperPartial);
    }
}
