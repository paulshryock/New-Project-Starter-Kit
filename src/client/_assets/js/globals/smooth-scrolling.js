/**
  * Adds hash link smooth scrolling
  */
function addHashLinkSmoothScrolling () {
  if (document.documentElement.scrollIntoView) {
    const links = [].slice.call(document.querySelectorAll('a[href^="#"]'))

    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault()
        const hash = link.getAttribute('href')

        if (hash !== '#') {
          const target = document.querySelector(hash)
          if (!target) return false
            
          target.scrollIntoView({ behavior: 'smooth' })
          return true
        }
      })
    })
    return true
  }
  return false
}

/**
  * Add hash link smooth scrolling
  */
addHashLinkSmoothScrolling()
