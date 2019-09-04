function FindSum (number) {
  let sum = 0
  let x = number.toString()
  for (let i = 0; i < x.length; i++) {
    sum += Number(x.charAt(i))
  }
  console.log(`Total = ${sum.toString()}`)
}

FindSum(97561)
