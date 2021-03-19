import handleScrolled from './_scripts/scrolled'
import handleToggleMenu from './_scripts/toggleMenu'
import handleSmoothScroll from './_scripts/smoothScroll'
import handlePop from './_scripts/pop'
import handleMyAge from './_scripts/myAge'
import handleZoom from './_scripts/zoom'
import handlePageTransitions from './_scripts/pageTransitions'
import Turbolinks from 'turbolinks'

// app bootstrap
function init () {
  handleScrolled()
  handleToggleMenu()
  handleSmoothScroll()
  handlePop()
  handleMyAge()
  handleZoom()
  handlePageTransitions()
}

// setup turbolinks
Turbolinks.start()
Turbolinks.setProgressBarDelay(200)

// Start the app
document.addEventListener("turbolinks:load", init)
// document.addEventListener('DOMContentLoaded', init)
