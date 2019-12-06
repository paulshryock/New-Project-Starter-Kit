const gulp = require('gulp')
const merge = require('merge-stream')
const del = require('del')
const Eleventy = require('@11ty/eleventy')
const ssg = new Eleventy()
const htmlmin = require('gulp-htmlmin')
const gulpStylelint = require('gulp-stylelint')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
const standard = require('gulp-standard')
const webpack = require('webpack-stream')
const compiler = require('webpack')
const path = require('path')
const concat = require('gulp-concat')
const beautify = require('gulp-beautify')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const connect = require('gulp-connect')

const isProduction = process.env.NODE_ENV === 'production'

const paths = {
  liquid: {
    src: './src/**/*.liquid'
  },
  markdown: {
    src: './src/**/*.md'
  },
  html: {
    dest: './build',
    output: './build/**/*.html'
  },
  css: {
    all: './src/_assets/css/**/*.css',
    src: './src/_assets/css/style.css',
    dest: './build/css',
    output: './build/css/bundle.css'
  },
  js: {
    root: './*.js',
    src: './src/_assets/js/**/*.js',
    data: './src/_data/**/*.js',
    entry: {
      all: './src/_assets/js/*.js',
      index: './src/_assets/js/index.js',
      cms: './src/_assets/js/cms.js'
    },
    dest: './build/js',
    output: './build/js/bundle.js'
  },
  fonts: {
    src: './src/_assets/fonts/**/*',
    dest: './build/fonts'
  },
  favicon: {
    src: './src/_assets/favicon/**/*',
    dest: './build'
  },
  images: {
    src: './src/_assets/img/**/*',
    dest: './build/img'
  },
  cms: {
    src: './src/cms/config.yml',
    dest: './build/cms'
  }
}

function clean (cb) {
  del([paths.html.dest])

  return cb()
}

async function buildHtml (cb) {
  await ssg.init()
  await ssg.write()

  const options = {
    indent_size: 2,
    max_preserve_newlines: 1
  }

  gulp.src(paths.html.output)
    .pipe(beautify.html(options)) // Beautify
    .pipe(gulp.dest(paths.html.dest))
    .pipe(connect.reload())

  return cb()
}

function minifyHtml (cb) {
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

  gulp.src(paths.html.output, { base: './' })
    .pipe(htmlmin(options)) // Minify
    .pipe(gulp.dest(paths.html.dest))
    .pipe(connect.reload())

  return cb()
}

function lintCss () {
  const settings = {
    config: {
      extends: ['stylelint-config-standard']
    },
    fix: true,
    reporters: [
      { formatter: 'string', console: true }
    ]
  }

  const lint = gulp.src(paths.css.src)
    .pipe(gulpStylelint(settings))

  return lint
}

function buildCss (cb) {
  const plugins = [
    require('postcss-easy-import'), // @import files
    require('precss'), // Transpile Sass-like syntax
    require('postcss-preset-env'), // Polyfill modern CSS
    require('autoprefixer'), // Add vendor prefixes
    require('pixrem')() // Add fallbacks for rem units
  ]

  gulp.src(paths.css.src)
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(concat('bundle.css')) // Concatenate and rename
    .pipe(beautify.css({ indent_size: 2 })) // Beautify
    .pipe(sourcemaps.write('.')) // Maintain Sourcemaps
    .pipe(gulp.dest(paths.css.dest))
    .pipe(connect.reload())

  return cb()
}

function minifyCss (cb) {
  gulp.src(paths.css.output)
    .pipe(sourcemaps.init())
    .pipe(postcss([require('cssnano')])) // Minify
    .pipe(rename({ suffix: '.min' })) // Rename
    .pipe(sourcemaps.write('.')) // Maintain Sourcemaps
    .pipe(gulp.dest(paths.css.dest))
    .pipe(connect.reload())

  del([paths.css.output, `${paths.css.output}.map`])

  return cb()
}

function lintJs () {
  const lint = gulp.src([paths.js.src, paths.js.root])
    .pipe(standard({ fix: true }))
    .pipe(standard.reporter('default'))

  return lint
}

function buildJs (cb) {
  const config = {
    // Webpack configuration
    mode: isProduction ? 'production' : 'development',
    entry: {
      bundle: paths.js.entry
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

  gulp.src(paths.js.entry)
    .pipe(sourcemaps.init())
    .pipe(webpack(config, compiler, err => {
      if (err) { throw new Error(err) }
    })) // Webpack
    .pipe(beautify({ indent_size: 2 })) // Beautify
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.js.dest))
    .pipe(connect.reload())

  return cb()
}

function minifyJs (cb) {
  gulp.src(paths.js.output)
    .pipe(sourcemaps.init())
    .pipe(uglify()) // Minify
    .pipe(rename({ suffix: '.min' })) // Rename
    .pipe(sourcemaps.write('.')) // Maintain Sourcemaps
    .pipe(gulp.dest(paths.js.dest))
    .pipe(connect.reload())

  del([paths.js.output, `${paths.js.output}.map`])

  return cb()
}

function bundleFonts (cb) {
  gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest))
    .pipe(connect.reload())

  return cb()
}

function bundleFavicon (cb) {
  gulp.src(paths.favicon.src)
    .pipe(gulp.dest(paths.favicon.dest))
    .pipe(connect.reload())

  return cb()
}

function bundleImages (cb) {
  gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest))
    .pipe(connect.reload())

  return cb()
}

function copyCms (cb) {
  gulp.src(paths.cms.src)
    .pipe(gulp.dest(paths.cms.dest))
    .pipe(connect.reload())

  return cb()
}

function serve () {
  connect.server({
    root: paths.html.dest,
    livereload: true
  })
}

function watch () {
  gulp.watch([
    paths.liquid.src,
    paths.markdown.src
  ], buildHtml)
  gulp.watch([paths.css.src], buildCss)
  gulp.watch([paths.js.src, paths.js.root], buildJs)
  gulp.watch([paths.fonts.src], bundleFonts)
  gulp.watch([paths.favicon.src], bundleFavicon)
  gulp.watch([paths.images.src], bundleImages)
  gulp.watch([paths.cms.src], copyCms)
}

/**
 * Gulp tasks
 */

exports.default = gulp.series(
  clean,
  gulp.parallel(
    gulp.series(buildHtml, minifyHtml),
    gulp.series(lintCss, buildCss, minifyCss),
    gulp.series(lintJs, buildJs, minifyJs),
    bundleFonts,
    bundleFavicon,
    bundleImages,
    copyCms
  )
)

exports.build = gulp.series(
  clean,
  gulp.parallel(lintCss, lintJs),
  gulp.parallel(buildHtml, buildCss, buildJs),
  gulp.parallel(bundleFonts, bundleFavicon, bundleImages, copyCms),
  gulp.parallel(minifyHtml, minifyCss, minifyJs)
)

exports.develop = gulp.series(
  clean,
  gulp.parallel(lintCss, lintJs),
  gulp.parallel(buildCss, buildJs),
  gulp.parallel(bundleFonts, bundleFavicon, bundleImages, copyCms)
)

exports.serve = gulp.series(
  clean,
  gulp.parallel(lintCss, lintJs),
  gulp.parallel(buildCss, buildJs),
  gulp.parallel(bundleFonts, bundleFavicon, bundleImages, copyCms),
  gulp.parallel(serve, watch)
)
