
function oddEven (number) {
  let odds = 0
  let evens = 0
  let arr = number.toString().split('').map(Number)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens += arr[i]
    } else {
      odds += arr[i]
    }
  }
  console.log(odds)
  console.log(evens)
}

oddEven(1000435)
