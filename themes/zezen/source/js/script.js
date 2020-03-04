import handleScrolled from './_scripts/scrolled'
import handleToggleMenu from './_scripts/toggleMenu'
import handleSmoothScroll from './_scripts/smoothScroll'
import handlePop from './_scripts/pop'
import handleMyAge from './_scripts/myAge'
import handleZoom from './_scripts/zoom'
import Turbolinks from 'turbolinks'

// app bootstrap
function init () {
  handleScrolled()
  handleToggleMenu()
  handleSmoothScroll()
  handlePop()
  handleMyAge()
  handleZoom()
}

// setup turbolinks
Turbolinks.start()
Turbolinks.setProgressBarDelay(200)

// Start the app
document.addEventListener("turbolinks:load", init)
// document.addEventListener('DOMContentLoaded', init)
