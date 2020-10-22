const gulp              = require('gulp');
const webpack           = require('webpack-stream');
const WebpackConfig     = require('./webpack.config.js');
const sass              = require('gulp-sass');
const autoprefixer      = require('gulp-autoprefixer');
sass.compiler           = require('node-sass');

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
    return gulp.watch('src/scss/**/*.scss', gulp.series(['scss']));
});

gulp.task('webpack',  function () {
    return gulp.src('src/ts')
        .pipe(webpack(WebpackConfig))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('webpack:watch', function () {
    WebpackConfig.mode = 'development';
    WebpackConfig.watch = true;
    return gulp.src('src/ts')
        .pipe(webpack(WebpackConfig))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('dev', gulp.parallel(['scss:watch', 'webpack:watch']));

gulp.task('build', gulp.parallel(['scss', 'webpack']));