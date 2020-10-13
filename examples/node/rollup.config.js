import buble from '@rollup/plugin-buble';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';

import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        { file: pkg.main, format: 'cjs', exports: 'auto' },
        { file: pkg.module, format: 'es' },
        { file: pkg.browser, format: 'umd' },
    ],
    plugins: [
        typescript({ sourceMap: false }),
        resolve(),
        commonjs(),
        json(),
        buble({ objectAssign: 'Object.assign' }),
    ],
};
