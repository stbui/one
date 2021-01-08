/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

import 'reflect-metadata';
import { PATH_METADATA } from './constants';

export interface ControllerOptions {
    path?: string | string[];
}

export function Controller(): ClassDecorator;

export function Controller(prefix: string | string[]): ClassDecorator;

export function Controller(options: ControllerOptions): ClassDecorator;

export function Controller(prefix?: string | string[] | ControllerOptions): ClassDecorator {
    const defaultPath = '/';

    const path = prefix || defaultPath;

    return (target: Object) => {
        Reflect.defineMetadata('stbui', 'apm', target);
        Reflect.defineMetadata(PATH_METADATA, path, target);
    };
}
