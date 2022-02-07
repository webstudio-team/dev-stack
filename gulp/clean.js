const gulp = require("gulp")
const del = require("del")

gulp.task("clean", function (cb) {
  del(["dist/**", "!dist"], { force: true })
  cb()
})
