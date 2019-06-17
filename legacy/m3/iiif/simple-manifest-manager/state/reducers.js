import update from 'lodash/fp/update'
import unset from 'lodash/fp/unset'
import { labeled } from '../settings'

export function manifestReducer(state = {}, action) {
  switch (action.type) {
    case labeled('CREATE_MANIFEST'):
      return { ...state, [action.id]: action.payload }
    case labeled('UPDATE_MANIFEST'):
      return update([action.id], data => ({ ...data, ...action.payload }), state)
    case labeled('DELETE_MANIFEST'):
      return unset([action.id], state)
    default:
      return state
  }
}
