function invetory (input) {
  let invetory = []

  for (let arr of input) {
    let [name, level, items] = arr.split(' / ')
    level = +level
    items = items.split(', ')
    invetory.push({
      name,
      level,
      items
    })
  }
  console.log(JSON.stringify(invetory))
}
invetory(['Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest,DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara'])

// invetory(['add movie Fast and Furious',
//     'add movie Godfather',
//     'Inception directed by Christopher Nolan',
//     'Godfather directed by Francis Ford Coppola',
//      'Godfather on date 29.07.2018',
//     'Fast and Furious on date 30.07.2018',
//     'Batman on date 01.08.2018',
//     'Fast and Furious directed by Rob Cohen'])
