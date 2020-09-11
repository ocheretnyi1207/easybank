const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps")
const server = require("browser-sync");

gulp.task("css", function () {
  return gulp.src("src/scss/style.scss")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("src/css"))
    .pipe(server.stream())
});

gulp.task("server", function () {
  server.init({
    server: "src/",
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

gulp.task("build", gulp.series("css"));
gulp.task("start", gulp.series("build", "server"));
