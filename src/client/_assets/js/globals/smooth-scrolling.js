/**
  * Adds hash link smooth scrolling
  */
function addHashLinkSmoothScrolling () {
  if (document.documentElement.scrollIntoView) {
    const links = [].slice.call(document.querySelectorAll('a[href^="#"]'));

    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const hash = link.getAttribute('href');

        if (hash !== '#') {
          const target = document.querySelector(hash);
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, false);
    });
    return true;
  }
  return false;
}

/**
  * Add hash link smooth scrolling
  */
addHashLinkSmoothScrolling()
