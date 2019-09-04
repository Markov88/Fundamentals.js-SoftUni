function solve (arr) {
  let smallestEl = arr
    .sort((a, b) => a - b)
    .splice(0, 2)
  console.log(smallestEl)
}

solve([30, 15, 50, 5])
