
/**
 * Smooth scroll
 */
export default function () {
  var hashLinks = [].slice.call(document.querySelectorAll('a[href^="#"]:not([href="#"])'))
  var hashOnInit = document.location.hash

  // smoothScroll on hash links
  hashLinks.forEach(hashLink => {
    hashLink.addEventListener('click', (e) => {
      e.preventDefault()
      smoothScroll(hashLink.href)
    })
  })

  // smoothScroll on init
  smoothScroll(hashOnInit, true)
}

function smoothScroll(link, initial) {
  var navigation = document.querySelector('#navigation')
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
