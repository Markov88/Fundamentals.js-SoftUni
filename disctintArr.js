function disctint (arr) {
  let unique = []
  for (const el of arr) {
    if (!unique.includes(el)) {
      unique.push(el)
    }
  }
  console.log(unique.join(' '))
}

disctint([7, 8, 9, 7, 2, 3, 4, 1, 2])
