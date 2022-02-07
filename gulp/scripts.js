const gulp = require("gulp")
const config = require("../config")
const uglify = require("gulp-uglify")
const rename = require("gulp-rename")
const concat = require("gulp-concat")

gulp.task("customScripts", function (cb) {
  gulp.src(config.customScripts.paths).pipe(gulp.dest(config.scripts.dist))
  cb()
})

gulp.task("customScripts:min", function (cb) {
  gulp
    .src(config.customScripts.paths)
    .pipe(uglify())
    .pipe(gulp.dest(config.scripts.dist))
  cb()
})

gulp.task("vendors", function (cb) {
  gulp
    .src(config.vendors.paths)
    .pipe(concat("vendor.js"))
    .pipe(gulp.dest(config.scripts.dist))
  cb()
})

gulp.task("vendors:min", function (cb) {
  gulp
    .src(config.vendors.paths)
    // .pipe(babel())
    .pipe(concat("vendor.js"))
    .pipe(rename("vendor.min.js"))
    .pipe(uglify())
    .pipe(rename("vendor.js"))
    .pipe(gulp.dest(config.scripts.dist))
  cb()
})
