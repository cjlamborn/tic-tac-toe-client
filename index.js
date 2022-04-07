// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

import 'bootstrap'
// hello
// allows usage of new JS features
require('babel-polyfill')

// load manifests
// javascript entry point
require('./app/app.js')

// styles
require('./app/styles/index.scss')
console.log('hi')

const gameboard = document.getElementById('gameboard')
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

const boxClicked = (event) => {
  const id = event.target.id
  if (!spaces[id]) {
    spaces[id] = currentPlayer
    event.target.innerText = currentPlayer
    if (playerHasWon(currentPlayer)) {
      playText.innerText = `${currentPlayer} has won!`
      // restart clickReset?
      // currentPlayer = 'null'
      // event.preventDefault()
      // event.target.innerText = ' '
      // not sure how to make it so that when a player has won the boxes can no longer be clicked
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
