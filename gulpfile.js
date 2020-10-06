const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const server = require("browser-sync");
const imagemin = require("gulp-imagemin");
const rename = require("gulp-rename");
const csso = require("gulp-csso");
const del = require("del");

gulp.task("css", function () {
  return gulp.src("src/scss/style.scss")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream())
});

gulp.task("image", function () {
  return gulp.src("src/img/**/*.{png,jpg,svg}")
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.mozjpeg({progressive: true}),
    imagemin.svgo()
  ]))
  .pipe(gulp.dest("build/img/"))
})

gulp.task("copy", function () {
  return gulp.src([
    "src/fonts/**/*.{woff2,woff}",
    "src/js/**/*.js",
    "src/index.html"
  ], {
    base: "src"
  })
  .pipe(gulp.dest("build"))
});

gulp.task ("clean", function () {
  return del("build")
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.watch("src/scss/**/*.scss", gulp.series("css"));
gulp.watch("src/*.html", gulp.series("refresh"));
gulp.watch("src/*.html").on("change", server.reload);

gulp.task("build", gulp.series("clean", "css", "image", "copy"));
gulp.task("start", gulp.series("build", "server"));
