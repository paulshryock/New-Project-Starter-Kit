// IIFE
(function () {

function toggleNavButton (add) {
  const nav = document.querySelector('[data-toggle="true"].navigation')
  const navList = nav.querySelector('.navigation__list')

  if (add) {
    const navButton = document.createElement('button')
    navButton.textContent = 'Menu'
    navButton.classList.add('navigation__toggle')
    navButton.setAttribute('aria-expanded', 'false')

    nav.setAttribute('aria-expanded', 'false')
    nav.insertBefore(navButton, navList)
    return navButton
  } else {
    const navButton = nav.querySelector('.navigation__toggle')
    if (navButton) {
      nav.removeChild(navButton)
    }
    return navButton
  }
}

function toggleNavList (show) {
  const nav = document.querySelector('[data-toggle="true"].navigation')
  const navButton = nav.querySelector('.navigation__toggle')
  const navList = nav.querySelector('.navigation__list')

  if (show) {
    nav.setAttribute('aria-expanded', 'true')
    if (navButton) navButton.textContent = 'Close'
    navList.removeAttribute('hidden')
    navList.classList.add('is-active')
  } else {
    nav.setAttribute('aria-expanded', 'false')
    if (navButton) navButton.textContent = 'Menu'
    navList.setAttribute('hidden', '')
    navList.classList.remove('is-active')
  }

  return navList
}

function toggleNavState () {
  const nav = document.querySelector('[data-toggle="true"].navigation')
  const navList = nav.querySelector('.navigation__list')

  if (navList.classList.contains('is-active')) {
    this.setAttribute('aria-expanded', 'false')
    toggleNavList(false)
  } else {
    const links = navList.querySelectorAll('a')
    this.setAttribute('aria-expanded', 'true')
    toggleNavList(true)
    links[0].focus()
  }

  return nav
}

function toggleNavElements (mediaQuery) {
  const nav = document.querySelector('[data-toggle="true"].navigation')

  if (mediaQuery.matches) { // Tablet and up
    const navButton = nav.querySelector('.navigation__toggle')
    if (navButton) navButton.removeEventListener('click', toggleNavState, false)
    toggleNavButton(false)
    toggleNavList(true)
  } else { // Mobile
    toggleNavButton(true)
    toggleNavList(false)
    const navButton = nav.querySelector('.navigation__toggle')
    if (navButton) navButton.addEventListener('click', toggleNavState, false)
  }

  return nav
}

// Add mobile navigation
const mediaQuery = window.matchMedia('(min-width: 37.5rem)')
toggleNavElements(mediaQuery)

// Add listener on state change
mediaQuery.addListener(toggleNavElements)

})()
