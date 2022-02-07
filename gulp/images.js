const gulp = require("gulp")
const config = require("../config")
const imagemin = require("gulp-imagemin")

gulp.task("images:min", function (cb) {
  gulp
    .src(config.images.src + "*.{png,jpg,jpeg,gif}")
    .pipe(
      imagemin([
        imagemin.optipng({
          optimizationLevel: 5
        }),
        imagemin.jpegtran({
          progressive: true
        }),
        imagemin.gifsicle({
          interlaced: true
        })
      ])
    )
    .pipe(gulp.dest(config.images.dist))
  cb()
})

gulp.task("images", function (cb) {
  gulp
    .src(config.images.src + "*.{png,jpg,jpeg,gif,svg}")
    .pipe(gulp.dest(config.images.dist))

  cb()
})

gulp.task("favicon", function () {
  return gulp.src(config.favicon.src + "*").pipe(gulp.dest("./dist"))
})

gulp.task("res-img", function () {
  return gulp.src("./assets/res/image/*").pipe(gulp.dest("./dist/res/image/"))
})

gulp.task("res-img:min", function () {
  return gulp
    .src("./assets/res/image/*")
    .pipe(
      imagemin([
        imagemin.optipng({
          optimizationLevel: 5
        }),
        imagemin.jpegtran({
          progressive: true
        }),
        imagemin.gifsicle({
          interlaced: true
        })
      ])
    )
    .pipe(gulp.dest("./dist/res/image/"))
})
