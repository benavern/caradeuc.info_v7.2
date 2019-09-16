import handleScrolled from './_scripts/scrolled'
import handleToggleMenu from './_scripts/toggleMenu'
import handleSmoothScroll from './_scripts/smoothScroll'
import handlePop from './_scripts/pop'
import handleMyAge from './_scripts/myAge'
import handleZoom from './_scripts/zoom'
import handleColorMode from './_scripts/colorMode'

function init () {
  handleScrolled()
  handleToggleMenu()
  handleSmoothScroll()
  handlePop()
  handleMyAge()
  handleZoom()
  handleColorMode()
}

document.addEventListener("DOMContentLoaded", init)
