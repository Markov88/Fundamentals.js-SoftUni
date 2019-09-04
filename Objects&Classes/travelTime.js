function travel (input) {
  let coutries = {}
  input.forEach(line => {
    let [country, town, price] = line.split(' > ')
    price = Number(price)
    if (!coutries.hasOwnProperty(country)) {
      coutries[country] = {}
      coutries[country][town] = price
    } else {
      let countryObj = coutries[country]
      if (!countryObj.hasOwnProperty(town)) {
        countryObj[town] = price
      } else {
        let oldPrice = countryObj[town]
        if (oldPrice > price) {
          countryObj[town] = price
        }
      }
    }
  })
  let sortedCountries = Object.entries(coutries)
    .sort((firstCountry, secondCoutry) => {
      let firstName = firstCountry[0]
      let secondName = secondCoutry[0]
      return (firstName.localeCompare(secondName) || firstCountry[1] - secondCoutry[1])
    })

    .map((e) => `${e[0]} -> ${Object.entries(e[1])}`)
    .join(' ')
  return sortedCountries
}
console.log(travel([

  'Bulgaria > Sofia > 500',

  'Bulgaria > Sopot > 800',

  'France > Paris > 2000',

  'Albania > Tirana > 1000',

  'Bulgaria > Sofia > 200'

]))
