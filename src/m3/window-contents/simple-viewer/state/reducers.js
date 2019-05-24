import unset from 'lodash/fp/unset'
import { labeled, defaultState } from '../settings'

export function simpleViewerReducer(state = defaultState, action) {
  switch (action.type) {
    case labeled('ADD_VIEWER'):
      return { ...state, [action.payload.id]: action.payload }
    case labeled('REMOVE_VIEWER'):
      return unset([action.payload.id], state)
    default:
      return state
  }
}
