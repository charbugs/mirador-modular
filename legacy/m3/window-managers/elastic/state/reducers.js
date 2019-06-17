import unset from 'lodash/fp/unset'
import { labeled, defaultState } from '../settings'

export function elasticReducer(state = defaultState, action) {
  switch (action.type) {
    case labeled('ADD_WINDOW'):
      return { ...state, [action.payload.id]: action.payload }
    case labeled('REMOVE_WINDOW'):
      return unset([action.payload.id], state)
    default:
      return state
  }
}
