/**
  * Adds anchor link smooth scrolling
  *
  */
function addAnchorLinkSmoothScrolling () {
  const links = [].slice.call(document.querySelectorAll('a[href^="#"]'))

  links.map(link => {
    link.addEventListener('click', (e) => {
      const link = this.getAttribute('href')
      const anchor = document.querySelector(link)

      e.preventDefault()
      anchor.scrollIntoView({ behavior: 'smooth' })
    }, false)
  })
}

/**
  * Add anchor link smooth scrolling
  *
  */
addAnchorLinkSmoothScrolling()
