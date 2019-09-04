function polindrome (number) {
  let isPolindrome = (a, b) => a === b
  for (let i = 0; i < number.length; i++) {
    let currentNumber = number[i]
    let reversedNumber = Number(currentNumber.toString().split('').reverse().join(''))
    console.log(isPolindrome(currentNumber, reversedNumber))
  }
}

polindrome([123, 323, 421, 121])
