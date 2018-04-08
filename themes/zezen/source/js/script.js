(function(window, document, undefined) {

  function handleScrolled () {
    if (window.scrollY > 0) {
      document.body.classList.add('scrolled')
    } else {
      document.body.classList.remove('scrolled')
    }
  }

  window.addEventListener('scroll', handleScrolled)
  handleScrolled()

})(window, document)
