/**
 * Pop elements on the page
 */
export default function () {
  const popElements = [].slice.call(document.querySelectorAll('.pop'))

  if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('popped', entry.intersectionRatio > 0)
      })
    })

    popElements.forEach(popElement => observer.observe(popElement))
  } else {
    popElements.forEach(element => element.classList.add('popped'))
  }
}
