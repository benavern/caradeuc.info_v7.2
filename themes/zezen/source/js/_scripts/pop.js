/**
 * Pop elements on the page
 */
export default function () {
  window.addEventListener('scroll', handlePop)
  window.addEventListener('resize', handlePop)
  handlePop()
}

function handlePop () {
  var popElements = [].slice.call(document.querySelectorAll('.pop'))
  var currentScroll = window.scrollY
  var isBottom = currentScroll >= document.body.scrollHeight - window.innerHeight
  var popHeight = Math.max(window.innerHeight, currentScroll + (0.8 * window.innerHeight))
  popElements.forEach(el => {
    if (popHeight > el.offsetTop || isBottom) {
      el.classList.add('popped')
    } else {
      el.classList.remove('popped')
    }
  })
}
