const gulp = require("gulp");
const { parallel, src } = require("gulp");
const gulpMinifyCssNames = require("gulp-minify-cssnames");

function miniClassName() {
  return gulp
    .src(["./src/*.html", "./src/**/*.css", "./src/**/*.js"])
    .pipe(
      gulpMinifyCssNames({
        postfix: "",
        prefix: "ud-",
      })
    )
    .pipe(gulp.dest("build"));
}

function minifyImages() {
  return src(["./src/images/*", "./src/images/**/*"]).pipe(
    gulp.dest("build/images")
  );
}

exports.default = parallel(miniClassName, minifyImages);
