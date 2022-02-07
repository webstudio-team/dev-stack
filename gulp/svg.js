const gulp = require("gulp")
const config = require("../config")

gulp.task("svg", function (cb) {
  gulp.src(config.svg.src + "**/*.svg").pipe(gulp.dest(config.svg.dist))
  cb()
})
