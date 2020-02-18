/**
  * Adds pagination link labels
  */
function addPaginationLinkLabels () {
  const links = document.querySelectorAll('.pagination a')

  if (links.length > 0) {
    links.map((link, i) => {
      const pageNumber = i + 1
      const isCurrent = link.getAttribute('aria-current')
      let ariaLabel = `Go to Page ${pageNumber}`

      if (isCurrent) {
        ariaLabel = `Page ${pageNumber}, Current Page`
      }
      link.setAttribute('aria-label', ariaLabel)
    })
  }
}

/**
  * Add pagination link labels
  */
addPaginationLinkLabels()
