/**
 * Add scrolled on body when window has been scrolled
 */
export default function () {
  window.addEventListener('scroll', handleScrolled)
  handleScrolled()
}

function handleScrolled () {
  if (window.scrollY > 0) {
    document.body.classList.add('scrolled')
  } else {
    document.body.classList.remove('scrolled')
  }
}
