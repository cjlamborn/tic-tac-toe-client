
const authEvents = require('./auth/events.js')
// not sure about what is needed here yet
$(() => {
  // attach event listener    bring const authevents here
  $('#sign-up-form').on('submit', authEvents.onSignUp)
})
$(() => {
  $('#sign-in-form').on('submit', authEvents.onSignIn)
})
$(() => {
  $('#gameboard').on('mouseover', function (event) {
    // your code here
    $(event.target).css('opacity', '100')
  })
})
