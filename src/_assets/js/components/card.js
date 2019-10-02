/**
  * Requires minimum click time to trigger card link click
  */
function requireCardClickTime () {
  const cards = document.querySelectorAll('.card')

  Array.prototype.forEach.call(cards, card => {
    let down
    let up

    card.onmousedown = () => {
      down = +new Date()
    }

    card.onmouseup = () => {
      up = +new Date()
      if ((up - down) < 200) {
        const link = card.querySelector('h2 a')

        link.click()
      }
    }

    card.style.cursor = 'pointer'
  })
}

/**
  * Require minimum click time to trigger card link click
  */
requireCardClickTime()
