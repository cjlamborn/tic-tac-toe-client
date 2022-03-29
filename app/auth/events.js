const authUi = require('./ui.js')
const authApi = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')
// these are directions to the path..go up..go up through files
const onSignUp = function (event) {
  event.preventDefault()
  console.log('now here')
  // next step get ur stuff9data from the form
  // declare a variable to store target
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  // who knows
  authApi.signUp(data)
    .then(() => authUi.onSignUpSuccess())
    .catch(() => authUi.onSignUpFailure())
  // formfields isnt defined need to do somehitng go to lib/get formfields //*const
}
const onSignIn = function (event) {
  event.preventDefault()
  console.log('now here')
  // next step get ur stuff9data from the form
  // declare a variable to store target
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  // who knows
  authApi.signIn(data)
    .then(() => authUi.onSignInSuccess())
    .catch(() => authUi.onSignInFailure())
  // formfields isnt defined need to do somehitng go to lib/get formfields //*const
}

module.exports = {
  onSignUp,
  onSignIn
}
