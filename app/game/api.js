const store = require('../store.js')
const newGame = function () {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-production.herokuapp.com/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const update = function (index, value, over) {
  return $.ajax({
    method: 'PATCH',
    url: 'https://tic-tac-toe-api-production.herokuapp.com/games/' + store.game._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: over
      }
    }
  })
}
module.exports = {
  newGame,
  update
}
