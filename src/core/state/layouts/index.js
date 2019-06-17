import update from 'lodash/fp/update'
import unset from 'lodash/fp/unset'
import uuid from 'uuid/v4'


const initialState = {}

export default function layoutReducer(state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case 'CREATE_WINDOW_LAYOUT':
      return { ...state, [payload.id]: payload }
    case 'UPDATE_WINDOW_LAYOUT':
      return update([payload.id], data => ({ ...data, ...payload }), state)
    case 'DELETE_WINDOW_LAYOUT':
      return unset([payload.id], state)
    default:
      return state
  }
}

export function createWindowLayout() {
  return {
    type: 'CREATE_WINDOW_LAYOUT',
    payload: { id: uuid(), main: 'MyMainPanel', 'side': 'MySidePanel' },
  }
}

export function deleteWindowLayout({ layoutId }) {
  return {
    type: 'DELETE_WINDOW_LAYOUT',
    payload: { id: layoutId },
  }
}
