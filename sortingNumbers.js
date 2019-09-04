function sorting (arr) {
  arr = arr.sort((a, b) => b - a)
  let newArr = []

  while (arr.length !== 0) {
    newArr.push(arr.shift())
    newArr.push(arr.pop())

    // let min = arr.pop()
    // let max = arr.shift()
    // newArr.push(max)
    // newArr.push(min)
  }
  console.log(newArr)
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
