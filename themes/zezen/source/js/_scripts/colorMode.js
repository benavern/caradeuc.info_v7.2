/**
 * saves, gets & applies dark or light theme
 */
export default function () {
  var toggleCheckbox = document.querySelector('#toggle-mode')
  var currentMode = localStorage.getItem('color-mode') === 'dark'

  toggleCheckbox.checked = currentMode
  setColorMode()

  toggleCheckbox.addEventListener('change', function() {
    currentMode = !currentMode
    setColorMode()
  })

  function setColorMode() {
    document.documentElement.classList.toggle('dark-mode', currentMode)
    localStorage.setItem('color-mode', currentMode ? 'dark' : 'light')
  }
}
