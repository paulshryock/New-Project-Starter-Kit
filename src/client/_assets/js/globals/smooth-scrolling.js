/**
  * Adds hash link smooth scrolling
  */
function addHashLinkSmoothScrolling () {
  const links = [].slice.call(document.querySelectorAll('a[href^="#"]'))

  links.map(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const hash = link.getAttribute('href')

      if (hash !== '#') {
        const target = document.querySelector(hash)
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }, false)
  })
}

/**
  * Add hash link smooth scrolling
  */
addHashLinkSmoothScrolling()
