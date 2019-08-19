/**
 * Toggle the menu visibility
 */
export default function () {
  document.querySelector('.nav-close-wrapper').addEventListener('click', handleToggleMenu)
  document.querySelector('.nav-toggle-wrapper').addEventListener('click', handleToggleMenu)
}

function handleToggleMenu (e) {
  e.preventDefault()
  document.body.classList.toggle('menu-visible')
}
