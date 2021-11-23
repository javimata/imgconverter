const gulp   = require('gulp'),
      gic    = require('gulp-imgconv'),
      image  = require('gulp-image'),
      gulpif = require('gulp-if'),
      rename = require("gulp-rename"),
      argv   = require('yargs').argv,
      del    = require('del');

var output = argv.output,
    resize = (argv.resize === undefined) ? false : true,
    width = (argv.width) ? argv.width : 1000,
    height = (argv.height) ? argv.height : 1000,
    fit = (argv.fit) ? argv.fit : "contain",
    bg = (argv.bg) ? argv.bg : "#ffffffff",
    q = (argv.q) ? argv.q : 80;

if (output == "jpg") { output = "jpeg" }

gulp.task('convert', function () {
    var stream = gulp.src('src/**/*')
        .pipe(gulpif(resize, gic(gic
            .begin()
            .resize({
                width: width,
                height: height,
                fit: fit,
                background: bg
            })
            .commit()
        )))
        .pipe(gulpif(output !== undefined, gic(gic
            .begin()
            .toFormat(output, { quality: q })
            .commit()
        )))
        .pipe(gulpif(output === "jpeg", rename({
            extname: ".jpg"
        })))
        .pipe(gulp.dest('dest/'));
    return stream;
});

gulp.task('compress', function () {
    var stream = gulp.src('dest/**/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: false,
            jpegRecompress: true,
            mozjpeg: false,
            guetzli: false,
            gifsicle: false,
            svgo: true,
            concurrent: 10
        }))
        .pipe(gulp.dest('./images'));
    return stream;
});

gulp.task('clean', function () {
    return del(['dest/**', 'images/**', 'src/**'], { force: true });
});

gulp.task('images', gulp.series('convert', 'compress'));