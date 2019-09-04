function solve (firstName, lastName, age) {
  let result = {
    firstName,
    lastName,
    age
  }
  let entries = Object.entries(result)
  //   for (const pair of entries) {
  //     console.log(`${pair[0]}: ${pair[1]}`)

  for (const [firstName, lastName] of entries) {
    console.log(`${firstName}: ${lastName}`)
  }
}

//   let ['Mila','Petya']=girls                 New syntax!!!
//   let [firstGirl,secondGirl]=girls
//   let firstGirl=girls[0]
//   let secondGirl=girls[1]

solve('Peter', 'Pan', '20')
