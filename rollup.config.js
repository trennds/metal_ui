import { uglify } from "rollup-plugin-uglify";

module.exports = {
    input: 'js/index.js',
    output: {
        file: 'dist/js/metal.js',
        format: 'iife',
        sourceMap: 'inline',
    },
    plugins: [uglify()]
};