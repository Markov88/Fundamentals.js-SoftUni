
function town (input) {
  let dataObj = input.map((item) => {
    let townInfo = item.split(' | ')
    return {
      name: townInfo[0],
      product: townInfo[1],
      price: townInfo[2]
    }
  })
  
  let result = dataObj
    .reduce((acc, cur) => {
      if (!acc[cur.product]) {
        acc[cur.product] = cur
        return acc
      }
      if (acc[cur.product].price > cur.price) {
        acc[cur.product] = cur
      }
      return acc
    }, {})

  Object.keys(result)
    .forEach((e) => {
      return console.log(`${e} -> ${result[e].price} (${result[e].name})`)
    })
}

town([
  'Sample Town | Sample Product | 1000',

  'Sample Town | Orange | 2',

  'Sample Town | Peach | 1',

  'Sofia | Orange | 3',

  'Sofia | Peach | 2',

  'New York | Sample Product | 1000.1',

  'New York | Burger | 10'])
