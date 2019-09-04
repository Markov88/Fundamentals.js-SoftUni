function sum (a, b, c) {
  function total (a, b) {
    return a + b
  }
  let finalResult = total(a, b) - c
  console.log(finalResult)
}
sum(23, 6, 10)
