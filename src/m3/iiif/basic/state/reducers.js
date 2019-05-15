import update from 'lodash/fp/update'
import unset from 'lodash/fp/unset'

export function manifests(state = {}, action) {
  switch (action.type) {
    case 'CREATE_MANIFEST':
      return { ...state, [action.id]: action.payload }
    case 'UPDATE_MANIFEST':
      return update([action.id], data => ({ ...data, ...action.payload }), state)
    case 'DELETE_MANIFEST':
      return unset([action.id], state)
    default:
      return state
  }
}
