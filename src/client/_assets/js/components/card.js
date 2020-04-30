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
      return down = +new Date()
    }

    card.onmouseup = () => {
      up = +new Date()
      if ((up - down) < 200) {
        const link = card.querySelector('h2 a') // TODO: Use class selector
        return link.click()
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
