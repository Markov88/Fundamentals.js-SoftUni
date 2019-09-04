function tracker (input) {
    let wordsCount = {}
  let words = input
    .shift()
    .split(' ')

  for (let word of words) {
    wordsCount[word] = 0
  }

  for (let curr of input) {
    if (wordsCount.hasOwnProperty(curr)) {
      wordsCount[curr]++
    }
  }
  let sortWords = Object.entries(wordsCount)
    .sort((a, b) => {
      let [firstWord, firstOccur] = a
      let [secondWord, secondOccur] = b
      return secondOccur - firstOccur
    })

.forEach(([word,occur]) => {
    console.log(`${word}  ${occur}`)
})
//   for (let [word, occur] of sortWords) {
//     console.log(`${word}  ${occur}`)
//   }
}

tracker([
  'this sentence', 'In', 'this', 'sentence', 'you',
  'have', 'to', 'count', 'the', 'occurances', 'of', 'the',
  'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'

])
