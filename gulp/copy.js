const gulp = require("gulp")

gulp.task("extras", function (cb) {
  gulp.src("./assets/extras/**/*", { dot: true }).pipe(gulp.dest("./dist/"))
  cb()
})

gulp.task("copy-fa-fonts", function (cb) {
  gulp
    .src("./node_modules/@fortawesome/fontawesome-pro/webfonts/**/*")
    .pipe(gulp.dest("./dist/fonts/font-awesome/"))
  cb()
})
