(function(window, document, undefined) {

  var body = document.body
  var fontSize = parseInt(window.getComputedStyle(document.body).getPropertyValue('font-size')) || 16

  function handleScrolled () {
    var scrolled = this.scrollY > (2 * fontSize)
    if (scrolled) {
      body.classList.add('scrolled')
    } else {
      body.classList.remove('scrolled')
    }
  }

  window.addEventListener('scroll', handleScrolled)
  handleScrolled()

})(window, document)
