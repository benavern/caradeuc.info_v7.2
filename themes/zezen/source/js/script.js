(function(window, document, undefined) {

  // --- variables
  var inputFields = [].slice.call(document.querySelectorAll('.input input, .input textarea'))
  var headingsAnchors = [].slice.call(document.querySelectorAll('#post .post-content h1[id], #post .post-content h2[id], #post .post-content h3[id]'))

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

  function handleToggleMenu (e) {
    e.preventDefault()
    document.body.classList.toggle('menu-visible')
  }

  function createPostAnchorLinks() {
    headingsAnchors.forEach(function (anchor) {
      anchor.insertAdjacentHTML('beforeend', '<a href="#' + anchor.id + '" class="anchor-link">🔗</a>');
    })
  }

  // --- events
  window.addEventListener('scroll', handleScrolled)

  inputFields.forEach(function (input) {
    input.addEventListener('focus', handleInputFields)
    input.addEventListener('blur', handleInputFields)
  })

  document.querySelector('.nav-close-wrapper').addEventListener('click', handleToggleMenu)
  document.querySelector('.nav-toggle-wrapper').addEventListener('click', handleToggleMenu)

  // --- init
  handleScrolled()
  createPostAnchorLinks()

})(window, document)
