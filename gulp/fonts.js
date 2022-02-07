const gulp = require("gulp")
const config = require("../config")

gulp.task("fonts", function (cb) {
  gulp.src(config.fonts.src + "**/*").pipe(gulp.dest(config.fonts.dist))
  cb()
})
