function criteria (alpha) {
  alpha = alpha.sort(compareLength)
  function compareLength (a, b) {
    if (a.length < b.length) {
      return a.length - b.length
    } else if (a.length === b.length) {
      return a.localeCompare(b)
    } else if (a.length > b.length) {
      return a.length - b.length
    }
  }
  for (const iterator of alpha) {
    console.log(iterator)
  }
}
criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
