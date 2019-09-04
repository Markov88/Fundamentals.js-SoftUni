function bombs (numbers, detonate) {
    //   for (let bomb = 0; bomb < numbers.length; bomb++) {
    //     if (numbers[bomb] === detonate[0]) {

    //       numbers.splice(bomb - detonate[1], bomb + detonate[1])

    //     }
    let newArr = []
    for (let bomb = 0; bomb < numbers.length; bomb++) {
        if (numbers[bomb] === detonate[0]) {
            numbers.splice(bomb - detonate[1], bomb + detonate[1] )
        }
        console.log(numbers)
    }
}


//   numbers.splice(i - detonate[1], i + detonate[1])
//   console.log(numbers)
// newArr.splice(i - detonate[1], i + detonate[1])

// } else if (numbers.includes(detonate[0])) {
//   let i = numbers.indexOf(detonate[0])
//   numbers.splice(i - detonate[1], i + detonate[1])

// if (numbers.includes(detonate[0])) {
//   numbers.splice(i - detonate[1], i + detonate[1])
// }

// }
//   if (newArr.includes(detonate[0])) {
//     newArr.splice(i - detonate[1], i + detonate[1])
//   }

bombs([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])
