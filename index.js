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
//   { combo: [3, 6, 9] }
// ]
function myFunction () {
  let one, two, three, four, five, six, seven, eight, nine
  one = document.getElementById('one').value
  two = document.getElementById('two').value
  three = document.getElementById('three').value
  four = document.getElementById('four').value
  five = document.getElementById('five').value
  six = document.getElementById('six').value
  seven = document.getElementById('seven').value
  eight = document.getElementById('eight').value
  nine = document.getElementById('nine').value
}
////////
if ((one === 'X') && (two === 'X') && (three === 'X')) {
  document.getElementById('print').innerHTML = 'X wins!'
}
else if ((four === 'X') && (five === 'X') && (six === 'X')) {
  document.getElementById('print').innerHTML = 'X wins!'
}
else if ((seven === 'X') && (eight === 'X') && (nine === 'X')) {
  document.getElementById('print').innerHTML =
}