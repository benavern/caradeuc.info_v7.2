/**
 * Pop elements on the page
 */
export default function () {
  window.addEventListener('scroll', handlePop)
  window.addEventListener('resize', handlePop)
  handlePop()
}

function handlePop () {
  // the elements to perform the pop action
  const popElements = [].slice.call(document.querySelectorAll('.pop'))

  // the current window scroll
  const currentScroll = window.scrollY

  // is the window scrolled to the bottom ?
  const isScrolledToBottom = currentScroll >= document.body.scrollHeight - window.innerHeight

  // the height where the elements shoold be popped
  const popHeight = Math.max(window.innerHeight, currentScroll + (0.8 * window.innerHeight))

  // go through all the elements found earlier and then ...
  popElements.forEach((el, i) => {
    // if element is above the limit or if the page is fully scrolled, apply the `popped` class
    // otherwise, remove it.
    if (isScrolledToBottom || getOffsetTop(el) < popHeight) {
      el.classList.add('popped')
    } else {
      el.classList.remove('popped')
    }
  })
}

/**
 * Get the element distance from the top of the document by traversing the dom
 * @param {Element} el
 */
function getOffsetTop(el) {
  let offsetTop = 0
  let node = el

  while (node) {
    if (!isNaN(node.offsetTop)) {
			offsetTop += node.offsetTop
		}
		node = node.offsetParent
  }

  return offsetTop
}
