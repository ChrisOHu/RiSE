import setUpFeathers from './feathers'
import getGlobals from '../globals'

const globals = getGlobals()

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

