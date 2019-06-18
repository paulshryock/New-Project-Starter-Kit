'use strict'

/**
  * The main navigation object
  *
  */
const navigation = {}

/**
  * Initializes the main navigation object
  *
  */
navigation.init = function () {
  navigation.addMobileNavigation()
}

/**
  * Adds mobile navigation menu toggle button
  *
  */
navigation.addNavButton = function () {
  const nav = document.querySelector('.navigation')
  const menu = document.querySelector('.navigation ul')
  let button = document.createElement('button')
  const span = document.createElement('span')
  const hamburger1 = span.cloneNode()
  const hamburger2 = span.cloneNode()
  const hamburger3 = span.cloneNode()

  span.textContent = 'Menu'
  span.classList.add('screen-reader-text')
  hamburger1.classList.add('hamburger', 'hamburger__1')
  hamburger2.classList.add('hamburger', 'hamburger__2')
  hamburger3.classList.add('hamburger', 'hamburger__3')
  button.appendChild(span)
  button.appendChild(hamburger1)
  button.appendChild(hamburger2)
  button.appendChild(hamburger3)
  button.setAttribute('aria-expanded', 'false')
  nav.setAttribute('aria-expanded', 'false')

  button = nav.insertBefore(button, menu)
}

/**
  * Removes mobile navigation menu toggle button
  *
  */
navigation.removeNavButton = function () {
  const nav = document.querySelector('.navigation')
  let button = document.querySelector('.navigation button')

  if (button) {
    button = nav.removeChild(button)
  }
}

/**
  * Sets mobile navigation menu toggle button text
  *
  */
navigation.setNavButtonText = function () {
  const button = document.querySelector('.navigation button span')

  if (button.textContent === 'Menu') {
    button.textContent = 'Close'
  } else if (button.textContent === 'Close') {
    button.textContent = 'Menu'
  }
}

/**
  * Hides mobile navigation menu
  *
  */
navigation.hideNavMenu = function () {
  const nav = document.querySelector('.navigation')
  const menu = document.querySelector('.navigation ul')

  menu.setAttribute('hidden', '')
  menu.classList.remove('is-active')
  nav.setAttribute('aria-expanded', 'false')
}

/**
  * Shows mobile navigation menu
  *
  */
navigation.showNavMenu = function () {
  const nav = document.querySelector('.navigation')
  const menu = document.querySelector('.navigation ul')

  menu.removeAttribute('hidden')
  menu.classList.add('is-active')
  nav.setAttribute('aria-expanded', 'true')
}

/**
  * Toggles navigation button and menu elements' states
  *
  */
navigation.toggleNavElementsStates = function () {
  const menu = document.querySelector('.navigation ul')
  const links = document.querySelectorAll('.navigation ul a')

  if (menu.classList.contains('is-active')) {
    this.setAttribute('aria-expanded', 'false')
    navigation.hideNavMenu()
  } else {
    this.setAttribute('aria-expanded', 'true')
    navigation.showNavMenu()
    links[0].focus()
  }

  navigation.setNavButtonText()
}

/**
  * Toggles navigation button and menu elements
  *
  */
navigation.toggleNavElements = function (mq) {
  if (mq.matches) { // Tablet and up
    const button = document.querySelector('.navigation button')

    if (button) {
      button.removeEventListener('click', navigation.toggleNavElementsStates, false)
    }
    navigation.removeNavButton()
    navigation.showNavMenu()
  } else { // Mobile
    navigation.addNavButton()
    const button = document.querySelector('.navigation button')

    if (button) {
      button.addEventListener('click', navigation.toggleNavElementsStates, false)
    }
    navigation.hideNavMenu()
  }
}

/**
  * Adds mobile navigation
  */
navigation.addMobileNavigation = function () {
  const nav = require('./../../_data/hamburger.11tydata.js')
  const query = nav.mediaQuery || '37.5rem'
  const mq = window.matchMedia(`(min-width: ${query})`)

  navigation.toggleNavElements(mq) // Call listener function at run time
  mq.addListener(navigation.toggleNavElements) // Attach listener function on state changes
}

/**
  * Initialize the main navigation object
  */
navigation.init()
