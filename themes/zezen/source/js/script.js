(function(window, document, undefined) {

  // --- variables
  var inputFields = [].slice.call(document.querySelectorAll('.input input, .input textarea'))

  // --- functions
  function handleScrolled () {
    if (window.scrollY > 0) {
      document.body.classList.add('scrolled')
    } else {
      document.body.classList.remove('scrolled')
    }
  }

  function handleInputFields (e) {
    if (e && e.type === 'focus') {
      this.parentNode.classList.add('is-focus', 'has-value')
    } else { // blur...
      this.parentNode.classList.remove('is-focus')
      if (!this.value) {
        this.parentNode.classList.remove('has-value')
      }
    }
  }

  function handleToggleMenu () {
    document.body.classList.toggle('menu-visible')
  }

  // --- events
  window.addEventListener('scroll', handleScrolled)

  inputFields.forEach(input => {
    input.addEventListener('focus', handleInputFields)
    input.addEventListener('blur', handleInputFields)
  })

  document.querySelector('.nav-close-wrapper').addEventListener('click', handleToggleMenu)
  document.querySelector('.nav-toggle-wrapper').addEventListener('click', handleToggleMenu)

  // --- init
  handleScrolled()

})(window, document)
