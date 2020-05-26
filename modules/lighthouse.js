const chromeLauncher = require('chrome-launcher')
const lighthouse = require('lighthouse')
const config = require('config')
const url = config.get('site.url')

function launchChromeAndRunLighthouse(url, opts, config = null) {
  return chromeLauncher.launch({chromeFlags: opts.chromeFlags})
    .then(chrome => {
      opts.port = chrome.port

      return lighthouse(url, opts, config)
        .then(results => {
          // use results.lhr for the JS-consumable output
          // https://github.com/GoogleChrome/lighthouse/blob/master/types/lhr.d.ts
          // use results.report for the HTML/JSON/CSV output as a string
          // use results.artifacts for the trace/screenshots/other specific case you need (rarer)
          return chrome.kill()
            .then(() => results.lhr)
        })
    })
}

const opts = {
  chromeFlags: ['--show-paint-rects']
}

const configuration = {
  extends: 'lighthouse:default',
  settings: {
    onlyCategories: ['performance'],
    // onlyAudits: [
    //   'first-meaningful-paint',
    //   'speed-index',
    //   'first-cpu-idle',
    //   'interactive',
    // ],
  },
}

launchChromeAndRunLighthouse(url, opts, configuration)
  .then(results => {
    Object.keys(results.audits).forEach(key => {
      const result = results.audits[key]
      console.log(`${result.title}: ${result.displayValue}`)
    })
  })