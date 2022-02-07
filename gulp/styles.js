const gulp = require("gulp")
const config = require("../config")
const $ = require("gulp-load-plugins")()
const sourcemaps = require("gulp-sourcemaps")
const postcss = require("gulp-postcss")
const browserSync = require("browser-sync").create()
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")
const pxtorem = require("postcss-pxtorem")
const cssNesting = require("postcss-nesting")
const postFlexbox = require("postcss-flexbox")

const sassPaths = ["node_modules/foundation-sites/scss"]

const pluginsConfig = (file) => ({
  plugins: [require("postcss-import")({ root: "./dist/css/*.css" })]
})

gulp.task("styles", function (cb) {
  gulp
    .src(config.styles.src + "app.scss")
    .pipe(sourcemaps.init())
    .pipe(
      $.sass({
        includePaths: sassPaths
      }).on("error", $.sass.logError)
    )
    .pipe(sourcemaps.write())
    .pipe(postcss(pluginsConfig))
    .pipe(gulp.dest(config.styles.dist))
    .pipe(browserSync.stream())
  cb()
})

const pxremOptions = {
  rootValue: 16,
  unitPrecision: 5,
  propList: ["font", "font-size", "letter-spacing"],
  selectorBlackList: [],
  replace: true,
  mediaQuery: false,
  minPixelValue: 0
}

const plugins = [
  autoprefixer({
    grid: true,
    browsers: ["last 2 versions"]
  }),
  cssnano(),
  pxtorem(pxremOptions),
  cssNesting(),
  postFlexbox()
]

gulp.task("styles:min", function (cb) {
  gulp
    .src(config.styles.src + "app.scss")
    .pipe(
      $.sass({
        includePaths: sassPaths
      }).on("error", $.sass.logError)
    )
    .pipe(postcss(plugins))
    .pipe(gulp.dest(config.styles.dist))
  cb()
})
