(function(window, document, undefined) {

  /**
   * Add scrolled on body when window has been scrolled
   */
  function handleScrolled () {
    if (window.scrollY > 0) {
      document.body.classList.add('scrolled')
    } else {
      document.body.classList.remove('scrolled')
    }
  }

  window.addEventListener('scroll', handleScrolled)
  handleScrolled()


  /**
   * Handle the states of the inputs (because of the material design like)
   */
  var inputFields = [].slice.call(document.querySelectorAll('.input input, .input textarea'))
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

  inputFields.forEach(function (input) {
    input.addEventListener('focus', handleInputFields)
    input.addEventListener('blur', handleInputFields)
  })


  /**
   * Toggle the menu visibility
   */
  function handleToggleMenu (e) {
    e.preventDefault()
    document.body.classList.toggle('menu-visible')
  }

  document.querySelector('.nav-close-wrapper').addEventListener('click', handleToggleMenu)
  document.querySelector('.nav-toggle-wrapper').addEventListener('click', handleToggleMenu)


  // /**
  //  * Add a link on each anchor on a post
  //  */
  // var headingsAnchors = [].slice.call(document.querySelectorAll('#post .post-content h1[id], #post .post-content h2[id], #post .post-content h3[id]'))

  // function createPostAnchorLinks() {
  //   headingsAnchors.forEach(function (anchor) {
  //     anchor.insertAdjacentHTML('beforeend', '<a href="#' + anchor.id + '" class="anchor-link">🔗</a>');
  //   })
  // }

  // createPostAnchorLinks()

  /**
   * Smooth scroll
   */
  var hashLinks = [].slice.call(document.querySelectorAll('a[href^="#"]:not([href="#"])'))
  var navigation = document.querySelector('#navigation')
  var hashOnInit = document.location.hash

  function smoothScroll(link, initial) {
    var hash = link.substring(link.indexOf('#'))
    var el = hash && document.querySelector(hash)
    if(el) {
      window.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: window.scrollY + el.getBoundingClientRect().top - navigation.offsetHeight
      })

      history.pushState({}, '', link);
    }
    else if(!initial) {
      document.location.href = link
    }
  }

  // smoothScroll on hash links
  hashLinks.forEach(hashLink => {
    hashLink.addEventListener('click', (e) => {
      e.preventDefault()
      smoothScroll(hashLink.href)
    })
  })

  // smoothScroll on init
  smoothScroll(hashOnInit, true)

  /**
   * Pop elements on the page
   */

  function handlePop () {

    var popElements = [].slice.call(document.querySelectorAll('.pop'))
    var currentScroll = window.scrollY
    var isBottom = currentScroll >= document.body.scrollHeight - window.innerHeight
    var popHeight = Math.max(window.innerHeight, currentScroll + (0.8 * window.innerHeight))
    popElements.forEach(el => {
      if (popHeight > el.offsetTop || isBottom) {
        el.classList.add('popped')
      } else {
        el.classList.remove('popped')
      }
    })
  }

  window.addEventListener('scroll', handlePop)
  window.addEventListener('resize', handlePop)
  handlePop()

  /**
   * counts my age... outch!
   */
  function handleMyAge() {
    var target = document.querySelector('.my-age')

    if(target) {
      var now = new Date()
      var birth = { y: 1990, m: 09, d: 27 }
      var myAge = {
        y: now.getFullYear() - birth.y,
        m: (now.getMonth() + 1) - birth.m,
        d: now.getDate() - birth.d
      }

      var ageToDisplay = myAge.y

      // before birthday in the year?
      if (myAge.m === 0 && myAge.d > 0 || myAge.m < 0) ageToDisplay -= 1

      target.innerHTML = ageToDisplay
    }
  }

  handleMyAge()

  /**
   * zoom on images of blog articles
   */
  const zoom = mediumZoom(document.querySelectorAll('article.post-content p > img'), {
    margin: window.innerWidth < 1024 ? 8 : 32,
    container: {
      top: navigation.offsetHeight
    },
    background: 'var(--gray-lighter)'
  })


  /**
   * counts my age... outch!
   */
  function handleColorMode() {
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

  handleColorMode()

})(window, document)
