function houseParty (people) {
  let guestArr = []
  for (let command of people) {
    let name = command.split(' ')[0]
    if (!command.includes('not')) {
      if (!guestArr.includes(name)) {
        guestArr.push(name)
      } else if (guestArr.includes(name)) {
        console.log(`${name} is already in the list!`)
      }
    } else if (command.includes('not')) {
      if (guestArr.includes(name)) {
        let i = guestArr.indexOf(name)
        guestArr.splice(i, 1)
      } else {
        console.log(`${name} is not in the list`)
      }
    }
  }
  guestArr.forEach(name => console.log(name))
}
houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!'])
