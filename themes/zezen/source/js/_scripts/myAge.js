/**
 * counts my age... outch!
 */
export default function handleMyAge() {
  var target = document.querySelector('.my-age')

  if(target) {
    var now = new Date()
    var birth = { y: 1990, m: 9, d: 27 }
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
