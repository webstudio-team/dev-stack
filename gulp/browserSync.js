const gulp = require("gulp")
const config = require("../config")
const htmlInjector = require("bs-html-injector")
const browserSync = require("browser-sync").create()

gulp.task("browserSync", function (cb) {
  browserSync.use(htmlInjector, {
    files: "./dist/*.html"
  })
  browserSync.init({
    server: {
      baseDir: ["./", "./dist/"]
    }
  })
  gulp.watch(config.styles.src + "**/*.scss", gulp.series("styles"))
  gulp
    .watch(config.scripts.src + "**/*.js", gulp.series("customScripts"))
    .on("change", browserSync.reload)
  gulp.watch(config.images.src + "*", gulp.series("images"))
  gulp.watch(config.images.dist + "*").on("change", browserSync.reload)
  gulp.watch([config.templates.src + "**/*.twig"], gulp.series("templates"))
  cb()
})
