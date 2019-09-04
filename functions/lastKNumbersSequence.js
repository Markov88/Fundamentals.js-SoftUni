function solve (n, k) {
  let result = [1]

  for (let i = 1; i < n; i++) {
    let index = Math.max(i - k, 0)
    // let index = i - k
    // if (index < 0) {
    //   index = 0
    // }
    let subArr = result.slice(index)
    // console.log(subArr)
    let sum = subArr.reduce((a, b) => a + b)

    // let sum = 0
    // for (const num of subArr) {
    //   sum += num
    // }

    result.push(sum)
  }
  console.log(result)
}

solve(6, 3)
