import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';

const frameConfig = require('./frameconfig');

export default {
    input: 'src/main.tsx',
    output: [
        {
            file: 'dist/bundle.js',
            format: 'iife',
        },
        {
            file: 'dist/bundle.min.js',
            format: 'iife',
            plugins: [terser()],
        },
    ],
    plugins: [
        replace({
            'process.env.FRAME_WORK': `'${process.env.FRAME_WORK}'`,
        }),
        resolve(),
        commonjs(),
        alias({
            entries: [...frameConfig.rollupAlias],
        }),
        typescript(),
        babel({ babelHelpers: 'bundled' }),
    ],
};
