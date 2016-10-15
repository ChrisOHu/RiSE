import setUpFeathers from './feathers'

const globals = require('../globals')()

export const CONNECT_REQUEST = 'CONNECT_REQUEST'
export const CONNECTED       = 'CONNECTED'
export const DISCONNECTED    = 'DISCONNECTED'

export function connect() {
  return (dispatch) => {
    dispatch(connectRequest())

    setUpFeathers()

    dispatch(connected())
  }
}

function connectRequest() {
  return {
    action: CONNECT_REQUEST
  }
}

function connected() {
  return {
    action: CONNECTED
  }
}

function disconnected() {
  return {
    action: DISCONNECTED
  }
}

