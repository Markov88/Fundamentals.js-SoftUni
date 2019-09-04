function solve (arr) {
  let result = []
  for (const element of arr) {
    if (element < 0) {
      result.unshift(element)
    } else {
      result.push(element)
    }
  }
  // for (let i = 0; i < ar.length; i++) {
  //     console.log(result[i]))

  // }
  console.log(result.join('\n'))
}

solve([7, -2, 8, 9])
