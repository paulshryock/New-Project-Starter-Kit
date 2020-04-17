'use strict'

/**
 * Import dependencies
 */
require('dotenv').config()
const express = require('express')
const app = express()
const config = require('config')
const compression = require('compression')
const helmet = require('helmet')
const { Liquid } = require('liquidjs')
const engine = new Liquid()
const path = require('path')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const createError = require('http-errors')
const error = require('./middleware/error')
require('express-async-errors')
const mongoose = require('mongoose')
const favicon = require('serve-favicon')
const httpLogger = require('morgan')
const { log } = require('./modules/logger')
const debug = {
  startup: require('debug')('npsk:startup'),
  database: require('debug')('npsk:database')
}

const isProduction = app.get('env') === 'production'

/**
 * Error if missing jwtPrivateKey
 */
if(!config.get('jwtPrivateKey')) {
  log.error('FATAL ERROR: jwtPrivateKey is not defined.')
}

/**
 * Setup HTTP headers
 */
const origin = {
  origin: isProduction ? config.get('app.url') : '*',
}

const helmetHeaders = {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: [
        "'self'"
        ],
      scriptSrc: [
        "'self'",
        'https://polyfill.io'
      ],
      upgradeInsecureRequests: true
    }
  },
  featurePolicy: {
    features: {
      geolocation: ["'none'"],
      midi: ["'none'"],
      notifications: ["'none'"],
      push: ["'none'"],
      syncXhr: ["'self'"],
      microphone: ["'none'"],
      camera: ["'none'"],
      magnetometer: ["'none'"],
      gyroscope: ["'none'"],
      speaker: ["'none'"],
      vibrate: ["'none'"],
      fullscreen: ["'none'"],
      payment: ["'none'"]
    }
  },
  frameguard: {
    action: 'deny'
  },
  hsts: {
    maxAge: 31536000, // 1 year
    includeSubDomains: true,
    preload: true
  },
  referrerPolicy: {
    policy: 'strict-origin-when-cross-origin'
  }
}

app.use(cors(origin)) // Set Access-Control-Allow-Origin header
app.use(helmet(helmetHeaders)) // Set HTTP headers

/**
 * Setup gzip compression
 */
app.use(compression()) // compress all responses

/**
 * Serve favicon
 */
app.use(favicon(path.join(__dirname, './public/img/favicon', 'favicon.ico')))

/**
 * Setup logging
 */
if (!isProduction) {
  app.use(httpLogger('dev')) // Log requests to the console
}

/**
 * Connect to Database
 */
const protocol  = config.get('db.protocol')
const username  = config.get('db.username')
const password  = config.get('db.password')
const host      = config.get('db.host')
const port      = config.get('db.port')
const database  = config.get('db.database')

const dbString = protocol + '://' + username + ':' + password + '@' + host + port + '/' + database

mongoose.connect(dbString, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => { debug.database('Connected to MongoDB...') })
  .catch((err) => { debug.database('Could not connect to MongoDB...', err) })

mongoose.connection.on('error', err => {
  log.error('Database error... ', err)
  debug.database('Database error... ', err)
})

/**
 * Setup view engine
 */
app.engine('liquid', engine.express()) 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'liquid')


/**
 * Setup other middleware
 */
app.use(express.json()) // Return JSON
app.use(express.urlencoded({ extended: false })) // Allow query strings
app.use(cookieParser()) // Parse cookies
// app.use(express.static(path.join(__dirname, '../../build/client'))) // Uncomment this to serve static content

/**
 * Import routes
 */
const index = require('./routes/index')
const api = require('./routes/api')
const articles = require('./routes/articles')
const projects = require('./routes/projects')
const testimonials = require('./routes/testimonials')
const users = require('./routes/users')
const auth = require('./routes/auth')

/**
 * Setup routes
 */
app.use('/', index)
app.use('/api', api)
app.use('/api/articles', articles)
app.use('/api/projects', projects)
app.use('/api/testimonials', testimonials)
app.use('/api/users', users)
app.use('/api/auth', auth)

/**
 * Catch 404 and forward to error handler
 */
app.use(function(req, res, next) {
  next(createError(404))
})
app.use(error)

module.exports = app
