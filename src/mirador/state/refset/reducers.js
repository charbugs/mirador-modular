import update from 'lodash/fp/update'
import unset from 'lodash/fp/unset'


export function refsets(state = {}, action) {
  switch (action.type) {
    case 'CREATE_REFSET':
      return { ...state, [action.id]: action.payload }
    case 'UPDATE_REFSET':
      return update([action.id], data => ({ ...data, ...action.payload }), state)
    case 'DELETE_REFSET':
      return unset([action.id], state)
    default:
      return state
  }
}
