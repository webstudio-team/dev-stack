const gulp = require("gulp")
const config = require("./config.json")
require("require-dir")("./gulp/")

gulp.task("build", gulp.series([...config.tasks.build]))

gulp.task("serve", gulp.series([...config.tasks.serve, "browserSync"]))

gulp.task("production", gulp.series([...config.tasks.production]))
