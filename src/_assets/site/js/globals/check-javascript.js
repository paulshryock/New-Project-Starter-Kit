/**
  * Checks if Javascript is running
  */
function checkJavascript () {
  const html = document.querySelector('html')

  html.classList.replace('no-js', 'js')
}

/**
  * Check if Javascript is running
  */
checkJavascript()
