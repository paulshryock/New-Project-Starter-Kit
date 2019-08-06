/**
  * Registers service worker
  *
  * param {string} file
  */
function registerServiceWorker (file) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(file)
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope)
        // TODO: Uncomment this line if we're using it
        // if (registration.waiting) registration.update();
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err)
      })
  }
}

/**
  * Register service worker
  */
registerServiceWorker('/serviceworker.js')
