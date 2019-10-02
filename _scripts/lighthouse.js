const config = require('config')
const lighthouse = require('lighthouse')
const chromeLauncher = require('chrome-launcher')

function launchChromeAndRunLighthouse (url, opts, lighthouseConfig = null) {
  return chromeLauncher.launch({ chromeFlags: opts.chromeFlags }).then(chrome => {
    opts.port = chrome.port
    return lighthouse(url, opts, lighthouseConfig).then(results => {
      // use results.lhr for the JS-consumeable output
      // https://github.com/GoogleChrome/lighthouse/blob/master/types/lhr.d.ts
      // use results.report for the HTML/JSON/CSV output as a string
      // use results.artifacts for the trace/screenshots/other specific case you need (rarer)
      return chrome.kill().then(() => results.lhr)
    })
  })
}

const url = `http://localhost:${config.get('server.port')}`

const opts = {
  chromeFlags: ['--show-paint-rects']
}

// Configure Lighthouse:
const lighthouseConfig = {}

// Usage:
launchChromeAndRunLighthouse(url, opts, lighthouseConfig).then(results => {
  // Use results!
  console.log(results)
})
