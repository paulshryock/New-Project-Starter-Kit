/**
  * Requires minimum click time to trigger card link click
  */
function requireCardClickTime () {
  const cards = document.querySelectorAll('.card')
  if (!cards) return false

  cards.map(card => {
    let down
    let up

    card.onmousedown = () => {
      down = +new Date()
      return true
    }

    card.onmouseup = () => {
      up = +new Date()
      if ((up - down) < 200) {
        const link = card.querySelector('h2 a') // TODO: Use class selector
        link.click()
        return true
      }
    }

    card.style.cursor = 'pointer'
  })

  return true
}

/**
  * Require minimum click time to trigger card link click
  */
requireCardClickTime()
