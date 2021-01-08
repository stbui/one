import buble from '@rollup/plugin-buble';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';

import pkg from './package.json';

export default {
    input: 'src/test.ts',
    output: [
        { file: pkg.main, format: 'cjs', exports: 'auto', sourcemap: true },
        { file: pkg.module, format: 'es', sourcemap: true },
        { file: pkg.browser, format: 'umd', name: pkg.name, sourcemap: true },
    ],
    plugins: [
        typescript({
            tsconfig: 'tsconfig.json',
            tsconfigOverride: { compilerOptions: { module: 'es2015' } },
        }),
        resolve(),
        commonjs(),
        json(),
        buble({ objectAssign: 'Object.assign' }),
    ],
};
