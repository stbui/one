import buble from '@rollup/plugin-buble';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';

export default {
    input: 'src/index.ts',
    output: [
        { file: 'dist/one-core.cjs.js', format: 'cjs', exports: 'auto', sourcemap: true },
        { file: 'dist/one-core.esm.js', format: 'es', sourcemap: true },
        { file: 'dist/one-core.umd.js', format: 'umd', name: 'oneCore', sourcemap: true },
    ],
    plugins: [
        typescript({ tsconfigOverride: { compilerOptions: { module: 'es2015' } } }),
        resolve(),
        commonjs(),
        json(),
        buble({ objectAssign: 'Object.assign' }),
    ],
};
