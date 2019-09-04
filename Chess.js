function chess (n) {
  let turn = "<div> \n <span class='black'/> \n <span class='white'/> \n <span class='black'/> \n </div>\n \n "
  let result = ''

  for (let i = 1; i <= n; i++) {
    result += turn
  }
  return console.log(`<div class="chessboard"> \n \n ${result.toString()}</div>`)
}

chess(2)
