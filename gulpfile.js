let gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglifyjs');

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    })
});


gulp.task('code', function () {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('styles', function () {
    return gulp.src('app/**/*.css')
        .pipe(browserSync.reload({stream: true}))
});


gulp.task('scripts', function () {
    return  gulp.src('app/js/**/*.js')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts-concat',function () {
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

gulp.task('watch', function () {
    gulp.watch('app/**/*.css', gulp.parallel('styles'));
    gulp.watch('app/**/*.js', gulp.parallel('scripts'));
    gulp.watch('app/*.html', gulp.parallel('code'));
});

gulp.task('default', gulp.parallel('watch', 'browser-sync', 'scripts-concat'));