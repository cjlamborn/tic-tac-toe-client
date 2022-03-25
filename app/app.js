
const authEvents = require('./auth/events.js')
// not sure about what is needed here yet
$(() => {
  // attach event listener    bring const authevents here
  $('#sign-up-form').on('submit', authEvents.onSignUp)
})
$(() => {
  $('#sign-in-form').on('submit', authEvents.onSignIn)
})
