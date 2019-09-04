function solve (arr1, arr2) {
  let match = ''
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        match = arr1[i]
        console.log(match)
      }
    }
  }
}
solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l'])
