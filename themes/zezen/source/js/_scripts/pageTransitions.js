// document.addEventListener('DOMContentLoaded', init)

export default function() {
  document.body.classList.remove('hidden');

  document.querySelectorAll('a[href^="/"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      document.body.classList.add('hidden');
      setTimeout(() => {
        window.location.assign(e.target.href)
      }, 1000)
    })
  })
}
