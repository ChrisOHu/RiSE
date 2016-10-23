
export const PUSH           = 'PUSH'
export const POP            = 'POP'
export const NAVI_TO_LAUNCH = 'NAVI_TO_LAUNCH'
export const NAVI_TO_HOME   = 'NAVI_TO_HOME'
export const NAVI_TO_TAB    = 'NAVI_TO_TAB'

export function push({route, ...params}) {
  return {
    type: PUSH,
    route,
    ...params
  }
}
export function pop() {
  return {
    type: POP
  }
}
export function naviToLaunch() {
  return {
    type: NAVI_TO_LAUNCH
  }
}
export function naviToHome() {
  return {
    type: NAVI_TO_HOME
  }
}
export function naviToTab({route, ...params}) {
  return {
    type: NAVI_TO_TAB,
    route
  }
}

