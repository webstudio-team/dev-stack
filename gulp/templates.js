const gulp = require("gulp")
const config = require("../config")
const twig = require("gulp-twig")

gulp.task("templates", function (cb) {
  gulp
    .src(config.templates.src + "*.twig")
    .pipe(twig())
    .pipe(gulp.dest(config.templates.dist))
  cb()
})
