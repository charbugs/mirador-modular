import update from 'lodash/fp/update'
import unset from 'lodash/fp/unset'


export function contents(state = {}, action) {
  switch (action.type) {
    case 'CREATE_CONTENT':
      return { ...state, [action.id]: action.payload }
    case 'UPDATE_CONTENT':
      return update([action.id], data => ({ ...data, ...action.payload }), state)
    case 'DELETE_CONTENT':
      return unset([action.id], state)
    default:
      return state
  }
}
