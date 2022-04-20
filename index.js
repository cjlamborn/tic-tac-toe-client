// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

import 'bootstrap'
// hello
// allows usage of new JS features
require('babel-polyfill')
const store = require('./app/store.js')
// load manifests
// javascript entry point
require('./app/app.js')
const API = require('./app/game/api.js')
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
let gameOver = false
// post
const drawBoard = () => {
  gameOver = false
  API.newGame()
    .then(response => {
      store.game = response.game
      console.log(response)
    })
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
restartButton.addEventListener('click', drawBoard)
// const targetDiv = document.getElementById('gameboard')
// const btn = document.getElementById('start-game')
// btn.onclick = function () {
//   if (targetDiv.style.display !== 'none') {
//     targetDiv.style.display = 'grid'
//   }
// }
// const targetClick = document.getElementById('change-password-form')
// const butn = document.getElementById('sign')
// butn.onclick = function () {
//   if (targetClick.style.display !== 'none') {
//     targetClick.style.display = 'flex'
//   }
// }
// patch

const boxClicked = (event, box) => {
  const id = event.target.id
  if (!spaces[id]) {
    spaces[id] = currentPlayer
    event.target.innerText = currentPlayer
    if (playerHasWon(currentPlayer)) {
      console.log('player won')
      gameOver = true
      playText.innerText = `${currentPlayer} has won!`
      boxes.forEach(box => {
        box.removeEventListener('click', boxClicked)
        console.log(box)
      })
    } API.update(id, currentPlayer, gameOver)
      .then(response => console.log(response))
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
    if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
      console.log(`${currentPlayer} wins!`)
      return true
    }
  }
  // notClicked()
  // box.removeEventListener('click', boxClicked)
  // }
  // playerHasWon() && gameOver()

  // function gameOver (box) {
  //   box.removeEventListener('click', boxClicked)
  // }
  restartButton.addEventListener('click', () => {
  // drawBoard()
    spaces.forEach((space, index) => {
      spaces[index] = null
    })
    boxes.forEach((box) => {
      box.innerText = ''
      box.addEventListener('click', boxClicked)
    })
    playText.innerText = 'Let\'s Play!!'
    currentPlayer = oText
  })
}
