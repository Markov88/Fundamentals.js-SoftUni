function solve (arr) {
  let ascending = arr.sort()
  for (const i in ascending) {
    console.log(`${Number(i) + 1}. ${ascending[i]}`)
  }
}

solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
