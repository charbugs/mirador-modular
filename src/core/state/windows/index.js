import update from 'lodash/fp/update'
import unset from 'lodash/fp/unset'
import uuid from 'uuid/v4'


const initialState = {}

export default function windowsReducer(state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case 'CREATE_WINDOW':
      return { ...state, [payload.id]: payload }
    case 'UPDATE_WINDOW':
      return update([payload.id], data => ({ ...data, ...payload }), state)
    case 'DELETE_WINDOW':
      return unset([payload.id], state)
    default:
      return state
  }
}

export function createWindow({ manifestId, elasticId, mosaicId, layoutId }) {
  return {
    type: 'CREATE_WINDOW',
    payload: { id: uuid(), manifestId, elasticId, mosaicId, layoutId },
  }
}

export function deleteWindow({ windowId }) {
  return {
    type: 'DELETE_WINDOW',
    payload: { id: windowId },
  }
}

export function getWindows(state) {
  return state.windows
}
