const { feathers } = require('app/globals')()

export const REGISTER_REQUEST = "REGISTER_REQUEST"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"

export const LOGIN_REQUEST    = "LOGIN_REQUEST"
export const LOGIN_SUCCESS    = "LOGIN_SUCCESS"
export const LOGIN_FAILURE    = "LOGIN_FAILURE"

export const LOGOUT_REQUEST   = "LOGOUT_REQUEST"
export const LOGOUT_SUCCESS   = "LOGOUT_SUCCESS"
export const LOGOUT_FAILURE   = "LOGOUT_FAILURE"

export function register({email, phone, password}) {
  return (dispatch) => {
    dispatch(registerRequest({email, phone, password}))

    feathers.service('users')
      .create({email, phone, password})
      .then((result) => {
        return feathers.authenticate({
          type: 'local',
          email: email,
          phone: phone,
          password: password
        })
      })
      .then((result) => {
        //app.get('token')
        dispatch(registerSuccess())
      })
      .catch((err) => {
        dispatch(registerFailure(err))
      })
  }
}
function registerRequest() { return { action: REGISTER_REQUEST } }
function registerSuccess() { return { action: REGISTER_SUCCESS } }
function registerFailure() { return { action: REGISTER_FAILURE } }

export function login({email, phone, password}) {
  return (dispatch) => {
    dispatch(loginRequest())

    feathers.authenticate({
      type: 'local',
      email: email,
      phone: phone,
      password: password
    })
      .then((result) => {
        //app.get('token')
        dispatch(loginSuccess())
      })
      .catch((err) => {
        dispatch(loginFailure(err))
      })
  }
}
function loginRequest() { return { action: LOGIN_REQUEST } }
function loginSuccess() { return { action: LOGIN_SUCCESS } }
function loginFailure() { return { action: LOGIN_FAILURE } }

export function logout() {
  return (dispatch) => {
    dispatch(logoutRequest())

    feathers.logout()
      .then((result) => {
        dispatch(logoutSuccess())
      })
      .catch((err) => {
        dispatch(logoutFailure(err))
      })
  }
}
function logoutRequest() { return { action: LOGOUT_REQUEST } }
function logoutSuccess() { return { action: LOGOUT_SUCCESS } }
function logoutFailure() { return { action: LOGOUT_FAILURE } }

