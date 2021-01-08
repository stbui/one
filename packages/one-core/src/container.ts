/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

import { Type } from './interfaces/type.interface';
import { Module } from './module';

export class Container {
    private readonly modules = new Map<string, Module>();

    /**
     * 将模块加入到列表中
     * @param metatype
     */
    addModule(metatype: any) {
        if (!metatype) {
            throw new Error('error');
        }

        // test
        // compile
        // 生成模块token标识，相同的模块返回相同的token
        // const token = 'test1234567890';
        const token = JSON.stringify({ id: '123456', module: metatype.name });
        const type = metatype;

        if (this.modules.has(token)) {
            return;
        }

        const moduleRef = new Module(type, this);
        this.modules.set(token, moduleRef);

        return moduleRef;
    }

    /**
     * 该方法返回所有模块
     */
    getModules(): Map<string, Module> {
        return this.modules;
    }

    /**
     * 根据token，返回对应模块
     * @param moduleKey 模块标识
     */
    getModuleByKey(moduleKey: string) {
        return this.modules.get(moduleKey);
    }

    addImport(relatedModule: any, token: string) {
        if (!this.modules.has(token)) {
            return;
        }

        const moduleRef = this.modules.get(token);
        //  compile
        // test
        const relatedModuleToken = '123';
        const related = this.modules.get(relatedModuleToken);
        // @ts-ignore
        moduleRef.addRelatedModule(related);
    }

    /**
     * 添加提供者
     * @param provider 提供者方法
     * @param token 模块标识
     */
    addProvider(provider, token: string): string {
        if (!provider) {
            throw new Error('provider error');
        }

        if (!this.modules.has(token)) {
            throw new Error('token errror');
        }

        const moduleRef = this.modules.get(token);
        // @ts-ignore
        return moduleRef.addProvider(provider);
    }

    /**
     * 添加控制器
     * @param controller 控制器方法
     * @param token 模块标识
     */
    addController(controller: Type<any>, token: string) {
        if (!this.modules.has(token)) {
            throw new Error('token error');
        }
        const moduleRef = this.modules.get(token);
        // @ts-ignore
        moduleRef.addController(controller);
    }
}
