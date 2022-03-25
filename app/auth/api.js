const store = require('../store.js')

const signUp = function (data) {
  console.log(store)
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-up',
    data: data
    // can also just put data on its own
  })
}
const signIn = function (data) {
  console.log(store)
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-in',
    data: data
    // can also just put data on its own
  })
}
module.exports = {
  signUp,
  signIn
}
