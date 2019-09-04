function smallestNum (a, b, c) {
  if (a < b) {
    console.log(a)
    return a
  }

  if (b < c) {
    console.log(b)
    return b
  }

  if (c < a) {
    console.log(c)
    return c
  }
}

smallestNum(600, 342, 123)
