/**
  * Checks if dark mode is supported
  */
function checkDarkMode () {
  if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
    console.log('🎉 Dark mode is supported');
  }
}

/**
  * Check if dark mode is supported
  */
checkDarkMode()
