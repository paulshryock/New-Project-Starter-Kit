// SCSS
import './../css/app.css'

// Images
import './../img/favicon/android-chrome-192x192.png'
import './../img/favicon/android-chrome-512x512.png'
import './../img/favicon/apple-touch-icon.png'
import './../img/favicon/favicon-16x16.png'
import './../img/favicon/favicon-32x32.png'
import './../img/favicon/mstile-150x150.png'
import './../img/favicon/safari-pinned-tab.svg'

// JS
require('./browser')

const globals = [
  'check-javascript',
  'register-service-worker',
  'smooth-scrolling'
]
const components = [
  'card',
  'navigation',
  'pagination'
]
const scripts = [ globals, components ]

scripts.map(script => {
  script.map(item => {
    require(`./${item}`)
  })
})