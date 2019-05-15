import update from 'lodash/fp/update'
import unset from 'lodash/fp/unset'


export function workspace(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_WORKSPACE':
      return { ...state, ...action.payload }
    default:
      return state
  }
}
