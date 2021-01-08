/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

import 'reflect-metadata';
import { Module } from './module';
import { InstanceWrapper } from './instance-wrapper';
import { Controller } from './interfaces/controller.interface';
import { Type } from './interfaces/type.interface';
import { STATIC_CONTEXT } from './constants';

export class Injector {
    /**
     * 加载组件原型对象
     * @param wrapper 组件的实例包装器
     * @param collection 所属模块组件集合
     * @param contextId
     */
    public loadPrototype<T>({ name }, collection: Map<string, InstanceWrapper<T>>, contextId = STATIC_CONTEXT) {
        if (!collection) {
            return;
        }
        const target = collection.get(name);
        // @ts-ignore
        const instance = target.createPrototype(contextId);
        if (instance) {
            const wrapper = new InstanceWrapper({
                ...target,
                instance,
            });
            collection.set(name, wrapper);
        }
    }

    loadProvider(
        wrapper: InstanceWrapper<Controller>,
        moduleRef: Module,
        contextId = STATIC_CONTEXT,
        inquirer?: InstanceWrapper
    ) {
        const providers = moduleRef.providers;
        this.loadInstance(wrapper, providers, moduleRef, contextId, inquirer);
    }

    loadController(
        wrapper: InstanceWrapper<Controller>,
        moduleRef: Module,
        contextId = STATIC_CONTEXT,
        inquirer?: InstanceWrapper
    ) {
        const { controllers } = moduleRef;
        this.loadInstance(wrapper, controllers, moduleRef, contextId, wrapper);
    }

    /**
     * 根据模块加载包装器中实例，此时原型已经创建
     * @param wrapper 组件实例包装器
     * @param collection 所属模块组件集合
     * @param moduleRef Module实例
     * @param contextId
     * @param inquirer
     */
    loadInstance(
        wrapper: InstanceWrapper<any>,
        collection: Map<string, InstanceWrapper>,
        moduleRef: Module,
        contextId = STATIC_CONTEXT,
        inquirer?: InstanceWrapper
    ) {
        const { name, inject } = wrapper;
        const targetWrapper = collection.get(name);

        if (typeof targetWrapper === 'undefined') {
            throw new Error('targetWrapper error');
        }

        const callback = (instances: unknown[]) => {
            const properties = this.resolveProperties(wrapper, moduleRef, inject, contextId, wrapper, inquirer);
            const instance = this.instantiateClass(instances, wrapper, targetWrapper);
            this.applyProperties(instance, properties);
        };

        this.resolveConstructorParams(wrapper, moduleRef, callback);
    }

    /**
     * 组件原型
     * @param wrapper
     * @param moduleRef
     * @param inject
     * @param contextId
     * @param inquirer
     * @param parentInquirer
     */
    resolveProperties<T>(
        wrapper: InstanceWrapper<T>,
        moduleRef: Module,
        inject?: any[],
        contextId = STATIC_CONTEXT,
        inquirer?: InstanceWrapper,
        parentInquirer?: InstanceWrapper
    ) {}

    /**
     *
     * @param instance
     * @param properties
     */
    applyProperties<T = any>(instance: T, properties) {}

    /**
     * 实例化组件
     * @param instances 依赖的组件集合
     * @param wrapper 组件包装器
     * @param targetMetatype
     */
    instantiateClass(instances: any[], wrapper: InstanceWrapper, targetMetatype: InstanceWrapper) {
        const { metatype } = wrapper;

        return new (metatype as Type<any>)(...instances);
    }

    resolveConstructorParams<T>(
        wrapper: InstanceWrapper<T>,
        moduleRef: Module,
        callback: (args: unknown[]) => void | Promise<void>
    ) {
        let dependencies = Reflect.getMetadata('design:paramtypes', wrapper.metatype) || [];

        const resolveParam = (param: unknown, index: number) => {
            this.resolveSingleParam(wrapper, param, { index, dependencies }, moduleRef);
        };

        const instances = dependencies.map(resolveParam);
        callback(instances);
    }

    /**
     * 解析参数类，获取其包装器
     * @param targetType 所属组件包装器
     * @param param 参数类型
     * @param module
     */
    resolveSingleParam<T>(
        wrapper: InstanceWrapper<T>,
        param: Type<any> | string | symbol | any,
        dependencyContext,
        moduleRef: Module
    ) {
        if (typeof param === 'undefined') {
            throw new Error('resolveSingleParam error');
        }

        return this.resolveComponentInstance(moduleRef, '', param, wrapper);
    }

    /**
     * 加载组件实例
     * @param componentType 组件的实例包装器
     * @param module 所属Module实例
     */
    loadInstanceOfComponent(componentType, module) {
        const components = module.components;
        this.loadInstance(componentType, components, module);
    }

    resolveComponentInstance<T>(moduleRef: Module, name: any, dependencyContext, wrapper: InstanceWrapper<T>) {
        const providers = moduleRef.providers;
        // todo
    }
}
