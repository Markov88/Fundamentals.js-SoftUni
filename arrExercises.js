function solve (num) {
  let sum = []
  let total = 0
  let totalOriginal = 0
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      sum[i] = num[i] + i
    } else {
      sum[i] = num[i] - i
    }
    total += sum[i]
    totalOriginal += num[i]
  }
  console.log(sum)
  console.log(total)
  console.log(totalOriginal)
}
solve([5, 15, 23, 56, 35])
// solve([5, 14, 21, 59, 31])
