
/**
 * Handle the states of the inputs (because of the material design like)
 */

export default function () {
  var inputFields = [].slice.call(document.querySelectorAll('.input input, .input textarea'))

  inputFields.forEach(function (input) {
    input.addEventListener('focus', handleInputFields)
    input.addEventListener('blur', handleInputFields)
  })
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
