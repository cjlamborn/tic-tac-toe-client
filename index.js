// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

import 'bootstrap'
// hello
// allows usage of new JS features
require('babel-polyfill')

// load manifests
// javascript entry point
require('./app/app.js')

// these are the styles
require('./app/styles/index.scss')
console.log('hi')

// const gameboard = document.getElementById('gameboard')
const boxes = Array.from(document.getElementsByClassName('box'))
const restartButton = document.getElementById('new-game')
const playText = document.getElementById('playText')
const spaces = [null, null, null, null, null, null, null, null, null]
const oText = 'O'
const xText = 'X'
// const blankText = ' '
let currentPlayer = oText

const drawBoard = () => {
  boxes.forEach((box, index) => {
    const styleString = ''
    if (index < 3) {
      if (index % 3 === 0) {
        if (index % 3 === 2) {
          if (index > 5) { box.style = styleString }
        }
      }
    }
    box.addEventListener('click', boxClicked)
  })
}
const targetDiv = document.getElementById('gameboard')
const btn = document.getElementById('start-game')
btn.onclick = function () {
  if (targetDiv.style.display !== 'none') {
    targetDiv.style.display = 'grid'
  }
}
const targetClick = document.getElementById('change-password-form')
const butn = document.getElementById('sign')
butn.onclick = function () {
  if (targetClick.style.display !== 'none') {
    targetClick.style.display = 'flex'
  }
}
const boxClicked = (event, box) => {
  const id = event.target.id
  if (!spaces[id]) {
    spaces[id] = currentPlayer
    event.target.innerText = currentPlayer
    if (playerHasWon(currentPlayer)) {
      playText.innerText = `${currentPlayer} has won!`
    }
  }
  currentPlayer = currentPlayer === oText ? xText : oText
}
// function notClicked (box) {
//   box.removeEventListener('click', boxClicked)
// }

function playerHasWon (currentPlayer) {
  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      console.log(`${currentPlayer} wins!`)
      return true
    }
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      console.log(`${currentPlayer} wins!`)
      return true
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      console.log(`${currentPlayer} wins!`)
      return true
    }
  }
  if (spaces[8] === currentPlayer) {
    if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
      console.log(`${currentPlayer} wins!`)
      return true
    }
    if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
      console.log(`${currentPlayer} wins!`)
      return true
    }
  }
  if (spaces[4] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
      console.log(`${currentPlayer} wins!`)
      return true
    }
    if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
      console.log(`${currentPlayer} wins!`)
      return true
    }
  }
  // if (playerHasWon()) {
  //   gameOver(box) {
  //   box.removeEventListener('click', boxClicked)
  // }
}
// notClicked()
// box.removeEventListener('click', boxClicked)
// }
// playerHasWon() && gameOver()

// function gameOver (box) {
//   box.removeEventListener('click', boxClicked)
// }

// const gameOver = () => {
//   boxes.forEach((box, index) => {
//     if (playerHasWon) {
//       box.removeEventListener('click', boxClicked)
//     }
//   })
// }
// function gameOver() {
//   if(playerHasWon){
// boxes.forEach((box, index) => {
//     const styleString = ''
//     box.addEventListener('click', boxClicked)

//   }
// when a player wins you need to select all box html elements
// getElementByClass \
// for each element removeEventListener the two arguements you pass to remove would be the same as the ones you passed to add

// function gameOver (box, playerHasWon) {
//   box.removeEventListener('click', boxClicked)
//   playerHasWon()
// }
// function removeEvent (box) {
//   if (currentPlayer === playerHasWon) {
//     box.removeEventListener('click', boxClicked)
//   }
// }
// if (playerHasWon = true) {
// }
// if (playerHasWon) {
//   spaces.removeEventListener('click', boxClicked)
// }
// function gameOver(playerHasWon) {
//   for (let i = 0; i < spaces.length; i++) {
//     spaces[i].removeEventListener('click',)
//   }
// }
// i literally DONT KNOW WHAT TO DO
// i have been at this for hours
// no progress just nothing

restartButton.addEventListener('click', () => {
  spaces.forEach((space, index) => {
    spaces[index] = null
  })
  boxes.forEach((box) => {
    box.innerText = ''
  })
  playText.innerText = 'Let\'s Play!!'
  currentPlayer = oText
})
drawBoard()
// gameOver()
// removeEvent()
// playerHasWon()
