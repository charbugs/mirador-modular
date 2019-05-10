import update from 'lodash/fp/update'
import unset from 'lodash/fp/unset'


export function windows(state = {}, action) {
  switch (action.type) {
    case 'CREATE_WINDOW':
      return { ...state, [action.id]: action.payload }
    case 'UPDATE_WINDOW':
      return update([action.id], data => ({ ...data, ...action.payload }), state)
    case 'DELETE_WINDOW':
      return unset([action.id], state)
    default:
      return state
  }
}
