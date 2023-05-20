import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import cleaner from 'rollup-plugin-cleaner';
import frameConfig from './frameconfig.js';

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
            preventAssignment: true,
            values: {
                'process.env.FRAME_WORK': `'${process.env.FRAME_WORK}'`,
            },
        }),
        resolve(),
        commonjs(),
        alias({
            entries: [...frameConfig.rollupAlias],
        }),
        babel({ babelHelpers: 'bundled', extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx'] }),
        cleaner({
            targets: ['./dist/'],
        }),
    ],
};
