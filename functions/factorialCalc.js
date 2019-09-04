function fact (numberOne, numberTwo) {
  function factCalc (numberOne) {
    let index = 1
    for (let i = 2; i <= numberOne; i++) {
      index *= i
    }
    return index
  }

  let firstNum = factCalc(numberOne)
  let secondNum = factCalc(numberTwo)
  let finalResult = firstNum / secondNum
  console.log(finalResult.toFixed(2))
}
fact(5, 2)
