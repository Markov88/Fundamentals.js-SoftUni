function matrix (input) {
  return input

    .map((item, index) => {
      return item
        .map((k) => { return k })
        .filter((innerItem, innerIndex) => {
          return innerIndex === item.length - 1 - index
        })
    })
}
console.log(matrix([[20, 40], [10, 60]]))
