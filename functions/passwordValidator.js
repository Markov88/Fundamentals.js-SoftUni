
function password (pass) {
  function characters (pass) {
    if (pass.length > 10 || pass.length < 6) {
      console.log('Password must be between 6 and 10 characters')
      return false
    }
  }

  function lettersDigits (pass) {
    let matches = /[^A-Za-z]+/g

    if (!(pass === matches)) {
      console.log('Consists only of letters and digits')
      return false
    }
  }

  function listTwoDigits (pass) {
    let foundTwo = /\d+/g
    let x = []
    for (let i = 0; i < pass.length; i++) {
      let value = pass[i].match(foundTwo)
      if (value !== null) {
        x.push(pass[i])
      }
    }
    if (x.length < 2) {
      console.log('Password must have at least 2 digits')
      return false
    } else {
      return true
    }
  }

  if (characters(pass)) {
    console.log('is valid')
  }
  if (lettersDigits(pass)) {
    console.log('is valid')
  }
  if (listTwoDigits(pass)) {
    console.log('is valid')
  }
}

password('login')
