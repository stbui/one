/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui/apm
 */

import "reflect-metadata";
import { PATH_METADATA } from "./constants";

export function Controller(): ClassDecorator;

export function Controller(prefix: string): ClassDecorator;

export function Controller(options: object): ClassDecorator;

export function Controller(prefix?: string | object): ClassDecorator {
  const defaultPath = "/";

  const path = prefix;

  return (target: Object) => {
    Reflect.defineMetadata("stbui", "apm", target);
    Reflect.defineMetadata(PATH_METADATA, [], target);
  };
}
