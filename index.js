// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

import 'bootstrap'

// allows usage of new JS features
require('babel-polyfill')

// load manifests
// javascript entry point
require('./app/app.js')

// styles
require('./app/styles/index.scss')
console.log('hi')
// const boxes = document.querySelectorAll(".box")
// boxes.forEach((element) => {
// 	element.addEventListner('click', (e) => {
// 		console.log('X')
// 	})
// })


//  winningCombos = [
//   { combo: [1, 2, 3] },
//   { combo: [4, 5, 6] },
//   { combo: [7, 8, 9] },
//   { combo: [1, 4, 7] },
//   { combo: [2, 5, 8] },
//   { combo: [3, 6, 9] },
//diagonal
//   { combo: [1, 5, 9] },
//   { combo: [3, 5, 7] }
// ]
function myFunction () {
  const one = document.getElementById('one').value
  const two = document.getElementById('two').value
  const three = document.getElementById('three').value
  const four = document.getElementById('four').value
  const five = document.getElementById('five').value
  const six = document.getElementById('six').value
  const seven = document.getElementById('seven').value
  const eight = document.getElementById('eight').value
  const nine = document.getElementById('nine').value

//////checking for X
  if ((one === 'X') && (two === 'X') && (three === 'X')) {
    document.getElementById('print').innerHTML = 'X wins!'
}
else if ((four === 'X') && (five === 'X') && (six === 'X')) {
  document.getElementById('print').innerHTML = 'X wins!'
}
else if ((seven === 'X') && (eight === 'X') && (nine === 'X')) {
  document.getElementById('print').innerHTML = 'X wins!'
}
else if ((one === 'X') && (four === 'X') && (seven === 'X')) {
  document.getElementById('print').innerHTML = 'X wins!'
}
else if ((two === 'X') && (five === 'X') && (eight === 'X')) {
  document.getElementById('print').innerHTML = 'X wins!'
}
else if ((three === 'X') && (six === 'X') && (nine === 'X')) {
  document.getElementById('print').innerHTML = 'X wins!'
}
else if ((one === 'X') && (five === 'X') && (nine === 'X')) {
  document.getElementById('print').innerHTML = 'X wins!'
}
else if ((three === 'X') && (five === 'X') && (seven === 'X')) {
  document.getElementById('print').innerHTML = 'X wins!'
}
//checking for 0
else if ((one === 'O') && (two === 'O') && (three === 'O')) {
  document.getElementById('print').innerHTML = 'O wins!'
}
else if ((four === 'O') && (five === 'O') && (six === 'O')) {
  document.getElementById('print').innerHTML = 'O wins!'
}
else if ((seven === 'O') && (eight === 'O') && (nine === 'O')) {
  document.getElementById('print').innerHTML = 'O wins!'
}
else if ((one === 'O') && (four === 'O') && (seven === 'O')) {
  document.getElementById('print').innerHTML = 'O wins!'
}
else if ((two === 'O') && (five === 'O') && (eight === 'O')) {
  document.getElementById('print').innerHTML = 'O wins!'
}
else if ((one === 'O') && (two === 'O') && (three === 'O')) {
  document.getElementById('print').innerHTML = 'O wins!'
}
else if ((three === 'O') && (six === 'O') && (nine === 'O')) {
  document.getElementById('print').innerHTML = 'O wins!'
}
else if ((one === 'O') && (five === 'O') && (nine === 'O')) {
  document.getElementById('print').innerHTML = 'O wins!'
}
else if ((three === 'O') && (five === 'O') && (seven === 'O')) {
  document.getElementById('print').innerHTML = 'O wins!'
}
// trying to figure out how to check for tie?? maybe an else condition 
//"its a draw" 
//reset game
// function clickReset() {
//   location.reload ()
//   document.getElementById('one').value = ''
//   document.getElementById('two').value = ''
//   document.getElementById('three').value = ''
//   document.getElementById('four').value = ''
//   document.getElementById('five').value = ''
//   document.getElementById('five').value = ''
//   document.getElementById('six').value = ''
//   document.getElementById('seven').value = ''
//   document.getElementById('eight').value = ''
//   document.getElementById('nine').value = ''
// }
}
module.exports = {
  myFunction
}