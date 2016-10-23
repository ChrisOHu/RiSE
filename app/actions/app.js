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
    type: CONNECT_REQUEST
  }
}

function connected() {
  return {
    type: CONNECTED
  }
}

function disconnected() {
  return {
    type: DISCONNECTED
  }
}

