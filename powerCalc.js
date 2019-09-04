function solve (power) {
  printCarTax(power)
} function printCarTax (power) {
  if (power <= 37) {
    console.log(`${(power * 0.43).toFixed(2)} lv.`)
  } else if (power <= 55) {
    console.log(`${(power * 0.50).toFixed(2)} lv.`)
  } else if (power <= 74) {
    console.log(`${(power * 0.68).toFixed(2)} lv.`)
  } else if (power <= 110) {
    console.log(`${(power * 1.38).toFixed(2)} lv.`)
  } else {
    console.log(`${(power * 1.54).toFixed(2)} lv.`)
  }
}

solve(255.9)
