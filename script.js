var person = window.prompt('Please enter your name', 'Your name here')
if (person === '') {
  window.alert('I guess you don\'t know what your name is.')
} else if (person === null) {
  window.alert('I guess you don\'t know what your name is.')
} else {
  person = person.trim().toLowerCase()
  var color = window.prompt('Hello ' + person + '! What is your favorite primary color?')
  if (color === '') {
    var randomNumber = Math.random()
    if (randomNumber > 0.7) {
      window.alert('Red, that is the color of an apple')
    } else if (randomNumber > 0.5) {
      window.alert('Blue, that is the color of the sky')
    } else if (randomNumber > 0.3) {
      window.alert('Yellow, hat is the color of bananas')
    }
  } else if (color === null) {
    window.alert('I guess you don\'t have a favorite color')
  } else {
    color = color.trim().toLowerCase()
    if (color === 'red') {
      var confirm = confirm('Are you sure that\'s your favorite color?')
      if (confirm === true) {
        window.alert('That is the color of an apple')
      } else if (confirm === false) {
        window.alert('Red isn\'t your favorite color.')
      }
    } else if (color === 'blue' || 'yellow') {
      var number = window.prompt('Good choice! Now, pick a number 1-100')
      number = parseInt(number)
      if (number < 1 || number > 100) {
        window.alert('Your number wasn\'t between 1 & 100')
      } else if (number < 51) {
        window.alert('You chose a small number!')
      } else if (number > 50) {
        window.alert('You chose a big number!')
      }
    } else {
      window.alert('That is not a primary color')
    }
  }
}
