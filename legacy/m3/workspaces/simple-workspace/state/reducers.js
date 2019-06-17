import { defaultState } from '../settings'
import { labeled } from '../settings'

export function workspaceReducer(state = defaultState, action) {
  switch (action.type) {
    case labeled('TOGGLE_LOADER'):
      return { ...state, loaderVisible: !state.loaderVisible }
    default:
      return state
  }
}
