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

gulp.task('js', function () {
    return gulp.src('src/js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('js:watch', function () {
    return gulp.watch('src/ts/*.js', gulp.series(['js']));
});

gulp.task('dev', gulp.parallel(['scss:watch', 'js:watch']));

gulp.task('build', gulp.parallel(['scss', 'js']));