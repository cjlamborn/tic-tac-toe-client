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
// diagonal
//   { combo: [1, 5, 9] },
//   { combo: [3, 5, 7] }
// ].on("click", fn)
// $('#log-in').onclick(function () {
// 	gsap.to('.container', {
//     opacity: 1,
// 		duration: 0.5,
// 		ease: 'none'
// 	})
// })
const gameboard = document.getElementById('gameboard')
const boxes = Array.from(document.getElementsByClassName('box'))
const restartButton = document.getElementById('new-game')
const playText = document.getElementById('playText')
const spaces = [null, null, null, null, null, null, null, null, null]
const oText = 'O'
const xText = 'X'
let currentPlayer = oText

const drawBoard = () => {
  boxes.forEach((box, index) => {
    let styleString = ''
    if (index < 3) {
      styleString += 'border-bottom: 3px solid var(--purple);'
    }
    if (index % 3 === 0) {
      styleString += 'border-right: 3px solid var(--purple);'
    }
    if (index % 3 === 2) {
      styleString += 'border-left: 3px solid var(--purple);'
    }
    if (index > 5) {
      styleString += 'border-top: 3px solid var(--purple);'
    }
    box.style = styleString
    box.addEventListener('click', boxClicked)
  })
}

const boxClicked = (event) => {
  const id = event.target.id
  if (!spaces[id]) {
    spaces[id] = currentPlayer
    event.target.innerText = currentPlayer
    if (playerHasWon(currentPlayer)) {
      playText.innerText = `${currentPlayer} has won!`
      // restart clickReset?
      return
    }
    currentPlayer = currentPlayer === oText ? xText : oText
  }
}

const playerHasWon = (currentPlayer) => {
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
}
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

// restartbutton.addEventListener('click', restart)

// const restart = () => {
// spaces.forEach((space, index) =>{
// spaces[index] = null
// resetting the text in the boxes to nothing
/// //})
/// ////boxes.forEach(box => {
/// ///////box.innerText = ''
// })
/// play.text.innerText = 'Tic tac toe?'
/// currentPlayer = O_Text
// })
// }

// }
// restart()
