import {
  register,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  login,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  logout,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE  
} from '../actions/accounts'

export default function (state = {}, action) {
  switch (action.action) {
    /* REGISTER *****/
    case REGISTER_REQUEST:
      return Object.assign({}, state, { isRegistering: true })
    case REGISTER_SUCCESS:
      return Object.assign({}, state, { registerSuccess: true })
    case REGISTER_FAILURE:
      return Object.assign({}, state, { registerFailure: true })
    /* LOGIN ********/
    case LOGIN_REQUEST:
      return Object.assign({}, state, { isLoggingIn: true })
    case LOGIN_SUCCESS:
      return Object.assgin({}, state, { loginSuccess: true })
    case LOGIN_FAILURE:
      return Object.assgin({}, state, { loginFailure: true })
    /* LOGOUT *******/
    case LOGOUT_REQUEST:
      return Object.assign({}, state, { isLoggingOut: true })
    case LOGOUT_SUCCESS:
      return Object.assgin({}, state, { logoutSuccess: true })
    case LOGOUT_FAILURE:
      return Object.assgin({}, state, { logoutFailure: true })
    /* default ******/
    default:
      return state
  }
}

