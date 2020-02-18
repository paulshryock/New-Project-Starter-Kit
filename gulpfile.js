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
      index: './src/_assets/js/index.js'
    },
    dest: './build/js',
    output: './build/js/**.js'
  },
  fonts: {
    src: './src/_assets/fonts/**/*',
    dest: './build/fonts'
  },
  images: {
    src: './src/_assets/img/**/*',
    dest: './build/img'
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
          ignoreAtRules: ['include', 'mixin']
        }],
        'no-descending-specificity': null,
        'selector-pseudo-class-no-unknown': null
      }
    },
    fix: true,
    reporters: [
      { formatter: 'string', console: true }
    ]
  }

  const plugins = [
    require('postcss-easy-import'), // @import files
    require('precss'), // Transpile Sass-like syntax
    require('postcss-preset-env'), // Polyfill modern CSS
    require('autoprefixer'), // Add vendor prefixes
    require('pixrem')() // Add fallbacks for rem units
  ]

  const lint = gulp.src(paths.css.all)
    .pipe(gulpStylelint(settings))

  const build = gulp.src(paths.css.src)
    .pipe(sourcemaps.init())
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

  const lint = gulp.src([paths.js.src, paths.js.root])
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

function serve (cb) {
  connect.server({
    root: paths.html.dest,
    livereload: true
  })

  gulp.watch([
    paths.js.data,
    paths.liquid.src,
    paths.markdown.src
  ], html)
  gulp.watch([paths.css.all], css)
  gulp.watch([
    paths.js.src,
    paths.js.root
  ], js)
  gulp.watch([
    paths.fonts.src,
    paths.images.src
  ], assets)

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
exports.serve = gulp.series(develop, serve)
exports.build = build
exports.production = gulp.series(build, serve)
exports.default = build
