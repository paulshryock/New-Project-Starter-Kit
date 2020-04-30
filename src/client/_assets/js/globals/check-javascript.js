/**
  * Checks if Javascript is running
  */
function checkJavascript () {
  const html = document.querySelector('html')
  if (!html) return false

  html.classList.replace('no-js', 'js')
  return true
}

/**
  * Check if Javascript is running
  */
checkJavascript()
