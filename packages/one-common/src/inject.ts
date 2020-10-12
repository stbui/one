/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */
import { PROPERTY_DEPS_METADATA } from "./constants";

export const isFunction = (fn): boolean => typeof fn === "function";

export function Inject(token?: any) {
  return (target: object, key: string | symbol, index?: number) => {
    token = token || Reflect.getMetadata("design:type", target, key);

    const type = isFunction(token) ? token.name : token;

    let properties =
      Reflect.getMetadata(PROPERTY_DEPS_METADATA, target.constructor) || [];

    properties = [...properties, { key, type }];

    Reflect.defineMetadata(
      PROPERTY_DEPS_METADATA,
      properties,
      target.constructor
    );
  };
}
