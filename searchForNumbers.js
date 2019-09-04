function search (arr1, arr2) {
  let newArr = []
  let takeElements = arr1.slice(0, arr2[0])
  let deleteEl = takeElements.splice(0, arr2[1])
  for (const exist of deleteEl) {
    if (exist === (arr2[2])) {
      newArr.push(exist)
    }
  }
  console.log(`Number ${arr2[2]} occurs ${newArr.length} times`)
}
search([5, 2, 3, 4, 1, 6], [5, 2, 3])
