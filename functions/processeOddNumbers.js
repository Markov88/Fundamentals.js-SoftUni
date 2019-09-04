function solve (arr) {
  // arr.shift()
  let result = arr
    .filter((e, i) => i % 2 !== 0)
    .map(e => (e * 2)).reverse()
    .join(' ')
  console.log(result)
  //   let oddArr = arr.filter(e => arr.indexOf(e) % 2 !== 0)
  //   let doubleReverseArr = oddArr.map(e => (e * 2)).reverse()
  //   console.log(doubleReverseArr)
}
solve([3, 0, 10, 4, 7, 3])
