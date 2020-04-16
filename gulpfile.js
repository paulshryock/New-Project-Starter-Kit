const config = require('config')
const gulp = require('gulp')
const merge = require('merge-stream')
const del = require('del')
const Eleventy = require('@11ty/eleventy')
const ssg = new Eleventy()
const htmlmin = require('gulp-htmlmin')
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
const rename = require('gulp-rename')
const connect = require('gulp-connect')

const isProduction = config.get('node.environment') === 'production'
const SRC = config.get('paths.src.client')
const BUILD = config.get('paths.build.client')

const paths = {
  html: {
    src: [
      `./${SRC}/_data/**/*.*`, // Global data
      `./${SRC}/_includes/**/*.*`, // Includes
      `./${SRC}/_layouts/**/*.*`, // Layouts
      `./${SRC}/**/*.11tydata.js`, // Template data
      `./${SRC}/**/*.html`,
      `./${SRC}/**/*.md`,
      `./${SRC}/**/*.11ty.js`,
      `./${SRC}/**/*.liquid`,
      `./${SRC}/**/*.njk`,
      `./${SRC}/**/*.hbs`,
      `./${SRC}/**/*.mustache`,
      `./${SRC}/**/*.ejs`,
      `./${SRC}/**/*.haml`,
      `./${SRC}/**/*.pug`,
      `./${SRC}/**/*.jstl`
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

  const options = {
    indent_size: 2,
    max_preserve_newlines: 1
  }

  const html = gulp.src(paths.html.output)
    .pipe(beautify.html(options)) // Beautify
    //
    // TODO: inline critical CSS
    // https://github.com/addyosmani/critical
    // https://github.com/addyosmani/critical-path-css-demo/blob/dca7ec42c6b9d7bb2d8425c4055aabc753c1a6ac/gulpfile.js#L100-L111
    //
    // TODO: validate HTML
    // https://www.npmjs.com/package/html-validator
    //
    .pipe(gulp.dest(paths.html.dest))
    .pipe(connect.reload())

  return html
}

function css () {
  const settings = {
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
  }

  const plugins = [
    require('postcss-easy-import'), // @import files
    require('precss'), // Use Sass-like markup and staged CSS features in CSS
    require('postcss-preset-env'), // Polyfill modern CSS
    require('autoprefixer'), // Add vendor prefixes
    require('pixrem')() // Add fallbacks for rem units
  ]

  const lint = gulp.src(paths.css.all)
    .pipe(gulpStylelint(settings))

  const build = gulp.src(paths.css.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) // Preprocess Sass
    // TODO: Test and see if I need to rename .css files to .scss
    .pipe(postcss(plugins))
    .pipe(concat('bundle.css')) // Concatenate and rename
    .pipe(beautify.css({ indent_size: 2 })) // Beautify
    .pipe(sourcemaps.write('.')) // Maintain Sourcemaps
    .pipe(gulp.dest(paths.css.dest))
    .pipe(connect.reload())

  const merged = merge(lint, build)

  return merged.isEmpty() ? null : merged
}

function js () {
  const options = {
    // Standard configuration
    fix: true,
    envs: ['browser'] // https://eslint.org/docs/user-guide/configuring#specifying-environments
  }

  const config = {
    // Webpack configuration
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
            loader: 'babel-loader', // Babel
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    devtool: 'source-map'
  }

  const lint = gulp.src(paths.js.src)
    .pipe(standard(options))
    .pipe(standard.reporter('default'))

  const build = gulp.src(paths.js.entry.all)
    .pipe(sourcemaps.init())
    .pipe(webpack(config, compiler, err => {
      if (err) { throw new Error(err) }
    })) // Webpack
    .pipe(beautify({ indent_size: 2 })) // Beautify
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.js.dest))
    .pipe(connect.reload())

  const merged = merge(lint, build)

  return merged.isEmpty() ? null : merged
}

function minify () {
  const options = {
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
  }

  const html = gulp.src(paths.html.output)
    .pipe(htmlmin(options)) // Minify
    .pipe(gulp.dest(paths.html.dest))
    .pipe(connect.reload())

  const css = gulp.src(paths.css.output)
    .pipe(sourcemaps.init())
    .pipe(postcss([require('cssnano')])) // Minify
    .pipe(rename({ suffix: '.min' })) // Rename
    .pipe(sourcemaps.write('.')) // Maintain Sourcemaps
    .pipe(gulp.dest(paths.css.dest))
    .pipe(connect.reload())

  const js = gulp.src(paths.js.output)
    .pipe(sourcemaps.init())
    .pipe(uglify()) // Minify
    .pipe(rename({ suffix: '.min' })) // Rename
    .pipe(sourcemaps.write('.')) // Maintain Sourcemaps
    .pipe(gulp.dest(paths.js.dest))
    .pipe(connect.reload())

  const merged = merge(html, css, js)

  return merged.isEmpty() ? null : merged
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
    .pipe(gulp.dest(paths.fonts.dest))
    .pipe(connect.reload())

  const images = gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest))
    .pipe(connect.reload())

  const merged = merge(fonts, images)

  return merged.isEmpty() ? null : merged
}

function watch (cb) {
  gulp.watch(paths.html.src, html)
  gulp.watch([paths.css.all], css)
  gulp.watch(paths.js.src, js)
  gulp.watch([paths.fonts.src, paths.images.src], assets)

  cb()
}

function serve (cb) {
  connect.server({
    root: paths.html.dest,
    livereload: true
  })

  cb()
}

/**
 * Gulp tasks
 */
const develop = gulp.series(
  clean,
  gulp.parallel(html, css, js),
  assets
)

const build = gulp.series(
  develop,
  minify,
  postMinify
)

exports.develop = develop
exports.watch = gulp.series(develop, watch)
exports.serve = gulp.series(develop, watch, serve)
exports.build = build
exports.production = gulp.series(build, serve)
exports.default = build
