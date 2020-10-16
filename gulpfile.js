const gulp          = require('gulp');
const webpack       = require('webpack-stream');
const sass          = require('gulp-sass');
const autoprefixer  = require('gulp-autoprefixer');
sass.compiler       = require('node-sass');

gulp.task('scss', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false,
            flexbox: "no-2009",
            grid: 'autoplace'
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('scss:watch', function () {
    return gulp.watch('src/scss/*.scss', gulp.series(['scss']));
});

gulp.task('ts', function () {
    return gulp.src('src/ts')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('ts:watch', function () {
    return gulp.watch('src/ts/*.ts', gulp.series(['ts']));
});

gulp.task('dev', gulp.parallel(['scss:watch', 'ts:watch']));

gulp.task('build', gulp.parallel(['scss', 'ts']));