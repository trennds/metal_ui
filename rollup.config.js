import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

module.exports = {
    input: 'js/index.js',
    output: {
        file: 'dist/js/metal.js',
        format: 'iife',
        sourceMap: 'inline',
    },
    plugins: [resolve(), commonjs({
        include: 'node_modules/**'
    })]
};