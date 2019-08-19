import mediumZoom from 'medium-zoom'
/**
 * zoom on images of blog articles
 */
export default function () {
  mediumZoom(document.querySelectorAll('article.post-content p > img'), {
    margin: window.innerWidth < 1024 ? 8 : 32,
    container: {
      top: navigation.offsetHeight
    },
    background: 'var(--gray-lighter)'
  })
}
