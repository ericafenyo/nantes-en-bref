var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();

sass.compiler = require("node-sass");

// Static server
gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

//Sass compiler
gulp.task("sass", function () {
  return gulp
    .src("./*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./"));
});

//html task
gulp.task("html", function () {
  gulp.src("./*.html").pipe(browserSync.reload({
    stream: true
  }));
});

//css task
gulp.task("css", function () {
  gulp.src("./*.css").pipe(browserSync.reload({
    stream: true
  }));
});

// Watch changes in html,css and sass files
gulp.task("watch", function () {
  gulp.watch(["./*.html"], ["html"]);
  gulp.watch(["./*.css"], ["css"]);
  gulp.watch("./*.scss", ["sass"]);
});

//default task
gulp.task("default", ["browser-sync", "watch"]);