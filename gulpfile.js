const config = require('config')
const gulp = require('gulp')
const merge = require('merge-stream')
const del = require('del')
const Eleventy = require('@11ty/eleventy')
const ssg = new Eleventy()
const htmlmin = require('gulp-htmlmin')
const validator = require('gulp-html')
const gulpStylelint = require('gulp-stylelint')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
const sass = require('gulp-sass')
const standard = require('gulp-standard')
const webpack = require('webpack-stream')
const compiler = require('webpack')
const path = require('path')
const concat = require('gulp-concat')
const beautify = require('gulp-beautify')
const uglify = require('gulp-uglify')
const svgmin = require('gulp-svgmin')
const rename = require('gulp-rename')
const connect = require('gulp-connect')

const isProduction = config.get('build.environment') === 'production'
const SRC = config.get('paths.src.client')
const BUILD = config.get('paths.build.client')

const paths = {
  html: {
    src: [
      `./${SRC}/_data/**/*.*`, // Data
      `./${SRC}/_includes/**/*.*`, // Includes
      `./${SRC}/_layouts/**/*.*`, // Layouts
      `./${SRC}/_content/**/*.*` // Content
    ],
    dest: `./${BUILD}`, // Build directory
    output: `./${BUILD}/**/*.html` // Built HTML files
  },
  css: {
    all: `./${SRC}/_assets/css/**/*.css`,
    src: `./${SRC}/_assets/css/style.css`,
    dest: `./${BUILD}/css`,
    output: `./${BUILD}/css/bundle.css`
  },
  js: {
    src: [
      './*.js',
      `./${SRC}/_assets/js/**/*.js`
    ],
    entry: {
      all: `./${SRC}/_assets/js/*.js`,
      index: `./${SRC}/_assets/js/index.js`
    },
    dest: `./${BUILD}/js`,
    output: `./${BUILD}/js/**.js`
  },
  fonts: {
    src: `./${SRC}/_assets/fonts/**/*`,
    dest: `./${BUILD}/fonts`
  },
  images: {
    src: `./${SRC}/_assets/img/**/*`,
    dest: `./${BUILD}/img`
  },
  svg: {
    dest: `./${BUILD}/img`,
    output: `./${BUILD}/img/**/*.svg`
  }
}

function clean () {
  return Promise.all([
    del([paths.html.dest])
  ])
}

async function html () {
  await ssg.init()
  await ssg.write()

  const html = gulp.src(paths.html.output)
    .pipe(beautify.html({
      indent_size: 2,
      max_preserve_newlines: 1
    })) // Beautify
    //
    // TODO: inline critical CSS
    // https://github.com/addyosmani/critical
    // https://github.com/addyosmani/critical-path-css-demo/blob/dca7ec42c6b9d7bb2d8425c4055aabc753c1a6ac/gulpfile.js#L100-L111
    //
    .pipe(gulp.dest(paths.html.dest))
    .pipe(connect.reload())

  return html
}

async function watchHtml () {
  await ssg.init()
  await ssg.watch()

  const html = gulp.src(paths.html.output)
    .pipe(beautify.html({
      indent_size: 2,
      max_preserve_newlines: 1
    })) // Beautify
    //
    // TODO: inline critical CSS
    // https://github.com/addyosmani/critical
    // https://github.com/addyosmani/critical-path-css-demo/blob/dca7ec42c6b9d7bb2d8425c4055aabc753c1a6ac/gulpfile.js#L100-L111
    //
    .pipe(gulp.dest(paths.html.dest))
    .pipe(connect.reload())

  return html
}

function lint () {
  const css = gulp.src(paths.css.src)
    .pipe(gulpStylelint({
      config: {
        extends: ['stylelint-config-standard'],
        rules: {
          'at-rule-no-unknown': [true, {
            ignoreAtRules: [
              'include',
              'mixin'
            ]
          }],
          'no-descending-specificity': null,
          'selector-pseudo-class-no-unknown': [true, {
            ignorePseudoClasses: [
              'focusring',
              'readonly'
            ]
          }]
        }
      },
      fix: true,
      reporters: [
        { formatter: 'string', console: true }
      ]
    }))

  const js = gulp.src(paths.js.src)
    .pipe(standard({ // Standard
      fix: true,
      envs: ['browser'] // https://eslint.org/docs/user-guide/configuring#specifying-environments
    }))
    .pipe(standard.reporter('default'))

  const merged = merge(css, js)
  return merged.isEmpty() ? null : merged
}

function css () {
  return gulp.src(paths.css.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) // Preprocess Sass
    .pipe(postcss([
      require('postcss-easy-import'), // @import files
      require('precss'), // Use Sass-like markup and staged CSS features
      require('postcss-preset-env'), // Polyfill modern CSS
      require('autoprefixer'), // Add vendor prefixes
      require('pixrem')() // Add fallbacks for rem units
    ]))
    .pipe(concat('bundle.css')) // Concatenate and rename
    .pipe(beautify.css({ indent_size: 2 })) // Beautify
    .pipe(sourcemaps.write('.')) // Maintain Sourcemaps
    .pipe(gulp.dest(paths.css.dest))
    .pipe(connect.reload())
}

function js () {
  return gulp.src(paths.js.entry.all)
    .pipe(sourcemaps.init())
    .pipe(webpack({ // Bundle modules with Webpack
      mode: isProduction ? 'production' : 'development',
      entry: {
        bundle: paths.js.entry.index
      },
      output: {
        path: path.resolve(__dirname, 'build/js'),
        publicPath: '/js/',
        filename: '[name].js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader', // Transpile JS with Babel
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
      devtool: 'source-map'
    }, compiler, err => {
      if (err) { throw new Error(err) }
    }))
    .pipe(beautify({ indent_size: 2 })) // Beautify
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.js.dest))
    .pipe(connect.reload())
}

function minifyHtml () {
  return gulp.src(paths.html.output)
    .pipe(htmlmin({ // Minify
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      decodeEntities: true,
      html5: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      sortAttributes: true,
      sortClassName: true,
      trimCustomFragments: true,
      useShortDoctype: true
    }))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(connect.reload())
}

function minifyCss () {
  return gulp.src(paths.css.output)
    .pipe(sourcemaps.init())
    .pipe(postcss([require('cssnano')])) // Minify
    .pipe(rename({ suffix: '.min' })) // Rename
    .pipe(sourcemaps.write('.')) // Maintain Sourcemaps
    .pipe(gulp.dest(paths.css.dest))
    .pipe(connect.reload())
}

function minifyJs () {
  return gulp.src(paths.js.output)
    .pipe(sourcemaps.init())
    .pipe(uglify()) // Minify
    .pipe(rename({ suffix: '.min' })) // Rename
    .pipe(sourcemaps.write('.')) // Maintain Sourcemaps
    .pipe(gulp.dest(paths.js.dest))
    .pipe(connect.reload())
}

function minifySvg () {
  return gulp.src(paths.svg.output)
    .pipe(svgmin()) // Optimize and minify
    .pipe(gulp.dest(paths.svg.dest))
    .pipe(connect.reload())
}

function postMinify (cb) {
  del([
    paths.css.output,
    `${paths.css.output}.map`,
    `${paths.js.dest}/*.js`,
    `${paths.js.dest}/*.js.map`,
    `!${paths.js.dest}/*.min.js`,
    `!${paths.js.dest}/*.min.js.map`
  ])

  return cb()
}

function assets () {
  const fonts = gulp.src(paths.fonts.src)
    // TODO: Optimize fonts
    .pipe(gulp.dest(paths.fonts.dest))
    .pipe(connect.reload())

  const images = gulp.src(paths.images.src)
    // TODO: Optimize images
    .pipe(gulp.dest(paths.images.dest))
    .pipe(connect.reload())

  const merged = merge(fonts, images)
  return merged.isEmpty() ? null : merged
}

function validate () {
  return gulp.src(paths.html.output)
    .pipe(validator({
      'errors-only': true
    })) // Validate HTML
    .pipe(gulp.dest(paths.html.dest))
}

function watch (cb) {
  gulp.watch(paths.html.src, gulp.series(watchHtml, validate))
  gulp.watch([paths.css.all], css)
  gulp.watch(paths.js.src, js)
  gulp.watch([paths.fonts.src, paths.images.src], assets)

  return cb()
}

function watchMinify (cb) {
  gulp.watch([paths.html.output], minifyHtml)
  gulp.watch([paths.css.output], gulp.series(minifyCss, postMinify))
  gulp.watch([paths.js.output], gulp.series(minifyJs, postMinify))
  gulp.watch([paths.svg.output], minifySvg)

  return cb()
}

function serve (cb) {
  connect.server({
    root: paths.html.dest,
    livereload: true,
    name: config.get('dev.name'),
    port: config.get('dev.port')
  })

  return cb()
}

/**
 * Gulp tasks
 */
exports.develop = gulp.series(
  gulp.parallel(clean, lint),
  gulp.parallel(html, css, js, assets),
  validate
)

exports.serve = gulp.series(
  gulp.parallel(clean, lint),
  gulp.parallel(html, css, js, assets),
  validate,
  watch,
  serve
)

exports.watch = gulp.series(
  gulp.parallel(clean, lint),
  gulp.parallel(html, css, js, assets),
  validate,
  watch
)

exports.build = gulp.series(
  clean,
  gulp.parallel(html, css, js, assets),
  gulp.parallel(minifyCss, minifyJs, minifySvg),
  gulp.parallel(minifyHtml, postMinify)
)

exports.production = gulp.series(
  clean,
  gulp.parallel(html, css, js, assets),
  gulp.parallel(minifyCss, minifyJs, minifySvg),
  gulp.parallel(minifyHtml, postMinify),
  gulp.parallel(watch, watchMinify),
  serve
)

exports.default = exports.build
