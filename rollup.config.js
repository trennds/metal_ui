import { uglify } from "rollup-plugin-uglify";

module.exports = {
    input: 'js/index.js',
    output: {
        file: 'dist/js/index.js',
        format: 'iife',
        sourceMap: 'inline',
        plugins: [uglify()]
    }
};