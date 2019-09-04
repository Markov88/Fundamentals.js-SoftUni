function solve (arr1, arr2) {
  //   let conc = ''
  let x = []
  let newArr = []
  for (let i = 0; i < arr1.length && i < arr2.length; i++) {
    if ((Number(arr1[i]) % 2 === 0 && Number(arr2[i]) % 2 !== 0) || (Number(arr1[i]) % 2 !== 0 && Number(arr2[i]) % 2 === 0)) {
      newArr = arr1[i] + arr2[i]
    } else {
      newArr = parseInt(arr1[i]) + parseInt(arr2[i])
    }
    x.push(newArr)
  }
  console.log(x.join(' - '))
}

solve(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44'])
