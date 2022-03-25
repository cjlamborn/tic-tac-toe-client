const onSignUpSuccess = function () {
  $('#auth-display').html()('<p>User signed up successfully</p>')
}
// next
const onSignUpFailure = function () {
  $('#auth-display').html()('<p>Error signing up</p>')
}
const onSignInSuccess = function () {
  $('#auth-display').html()('<p>User signed up successfully</p>')
}
// next
const onSignInFailure = function () {
  $('#auth-display').html()('<p>Error signing up</p>')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
}
