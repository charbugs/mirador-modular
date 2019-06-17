import { combineReducers } from 'redux'
import { labeled, defaultState } from './settings'

function workspace(state = defaultState, action) {
  switch (action.type) {
    case labeled('TOGGLE_LOADER'):
      return { ...state, loaderVisible: !state.loaderVisible }
    default:
      return state
  }
}

export { workspace as reducer }
