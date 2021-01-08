/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/one
 */

export interface Type<T = any> extends Function {
    new (...args: any[]): T;
}
