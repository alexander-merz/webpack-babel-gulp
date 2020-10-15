const gulp      = require('gulp');
const webpack   = require('webpack-stream');

const { task, src, dest } = gulp;

task('default', function () {
    return src('src/index.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(dest('dist/'));
});