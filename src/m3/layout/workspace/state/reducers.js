import update from 'lodash/fp/update'
import unset from 'lodash/fp/unset'

export function workspaceLayout(state = {}, action) {
  const { type, payload } = action
  switch (action.type) {
    case 'CREATE_LAYOUT_ITEM':
      return { ...state, [payload.id]: payload }
    case 'UPDATE_LAYOUT_ITEM':
      return update([payload.id], data => ({ ...data, ...payload }), state)
    case 'DELETE_LAYOUT_ITEM':
      return unset([payload.id], state)
    default:
      return state
  }
}
